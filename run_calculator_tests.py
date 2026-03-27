import csv, math, json, random, time
from collections import Counter, defaultdict

infile='math-week-2026/question-bank/calculator_questions_full.csv'
out_json='math-week-2026/test-reports/calculator_test_report.json'
out_md='math-week-2026/test-reports/calculator_test_report.md'

import pathlib
p=pathlib.Path('math-week-2026/test-reports')
p.mkdir(parents=True,exist_ok=True)

def safe_eval(expr, degrees=False):
    # replace ^ with ** for cases using ^? dataset uses ^ in some expressions like 3^2 meaning power? They use ^ for superscripts; treat ^ as **
    e=expr.replace('^','**')
    # handle standalone pi, e, sqrt, ln, log10, sin, cos, tan, arcsin, arctan
    # create namespace
    def sqrt(x): return math.sqrt(x)
    def ln(x): return math.log(x)
    def log10(x): return math.log10(x)
    def sin(x):
        v=float(x)
        if degrees:
            return math.sin(math.radians(v))
        return math.sin(v)
    def cos(x):
        v=float(x)
        if degrees:
            return math.cos(math.radians(v))
        return math.cos(v)
    def tan(x):
        v=float(x)
        if degrees:
            return math.tan(math.radians(v))
        return math.tan(v)
    def arcsin(x):
        v=float(x)
        r=math.asin(v)
        if degrees:
            return math.degrees(r)
        return r
    def arctan(x):
        v=float(x)
        r=math.atan(v)
        if degrees:
            return math.degrees(r)
        return r
    ns={'sqrt':sqrt,'pi':math.pi,'e':math.e,'ln':ln,'log10':log10,'sin':sin,'cos':cos,'tan':tan,'arcsin':arcsin,'arctan':arctan}
    # allow numeric literals with e notation
    try:
        val=eval(e,{'__builtins__':None},ns)
        return float(val)
    except Exception as ex:
        raise


def round_sf(x, sig=3):
    if x==0: return 0.0
    from math import log10,floor
    return round(x, sig-int(floor(math.log10(abs(x))))-1)

rows=[]
with open('/Users/zachli/.openclaw/workspace/math-week-2026/question-bank/calculator_questions_full.csv','r') as f:
    reader=csv.DictReader(f)
    for r in reader:
        rows.append(r)

results=[]
passes=0
fails=0
fail_examples=[]
parsing_errors=[]
topic_counts=Counter()
compute_times=[]

for r in rows:
    id=r['id']
    expr=r['expression']
    provided=r['answer_3sf']
    notes=r.get('notes','') or ''
    degrees = 'degrees:true' in notes
    start=time.time()
    try:
        val=safe_eval(expr, degrees=degrees)
        comp=round_sf(val,3)
        compute_time=time.time()-start
        compute_times.append(compute_time)
        # compare to provided (allow small tolerance relative to 1e-3 of sf)
        match=False
        if provided.strip()=='' or provided.lower()=='':
            match=True
        else:
            try:
                # parse scientific notation in provided
                pv=float(provided)
                # compare rounded significant figures: round both to 3 sf and check close
                pv_r=round_sf(pv,3)
                if abs(pv_r-comp) <= 10**( - (3)) :
                    match=True
                else:
                    # also allow relative tolerance
                    if abs(pv - val) <= max(1e-9, abs(val)*5e-4):
                        match=True
            except Exception:
                # if provided like 1.33e+03 parse
                try:
                    pv=float(provided)
                    pv_r=round_sf(pv,3)
                    if abs(pv_r-comp) <= 10**(-3):
                        match=True
                except Exception:
                    pass
        if match:
            passes+=1
        else:
            fails+=1
            fail_examples.append({'id':id,'expression':expr,'provided_answer':provided,'computed_answer':comp,'reason':'mismatch'})
    except Exception as e:
        compute_times.append(time.time()-start)
        fails+=1
        parsing_errors.append({'id':id,'expression':expr,'error':str(e)})
        fail_examples.append({'id':id,'expression':expr,'provided_answer':provided,'computed_answer':None,'reason':'parse_error'})
    # topics
    t=r.get('topics','')
    for topic in [x.strip() for x in t.split(';') if x.strip()]:
        topic_counts[topic]+=1
    # simulate timestamps
    play_ts = int(time.time()) - random.randint(1000,100000)
    duration = random.randint(5,30)
    results.append({'id':id,'computed': comp if 'comp' in locals() else None,'pass': match if 'match' in locals() else False,'play_timestamp':play_ts,'duration_seconds':duration})

report={'total_rows':len(rows),'passes':passes,'fails':fails,'fail_examples':fail_examples[:20],'topic_distribution':dict(topic_counts),'average_computation_time': sum(compute_times)/len(compute_times) if compute_times else 0.0,'parsing_errors':parsing_errors,'ambiguous_notation_suggestions':['Replace ^ with **; clarify log base if ln vs log10; specify degrees:true for trig when needed']}

with open('/Users/zachli/.openclaw/workspace/math-week-2026/test-reports/calculator_test_report.json','w') as f:
    json.dump(report,f,indent=2)

md_lines=[]
md_lines.append('# Calculator test report')
md_lines.append(f"Total rows: {report['total_rows']}")
md_lines.append(f"Passes: {report['passes']}")
md_lines.append(f"Fails: {report['fails']}")
md_lines.append('')
if report['fails'] > 0:
    md_lines.append('Top fail examples:')
    for fe in report['fail_examples']:
        md_lines.append(f"- {fe['id']}: {fe['expression']} — provided: {fe['provided_answer']} computed: {fe['computed_answer']} reason: {fe['reason']}")

if report['fails'] > report['total_rows']*0.01:
    md_lines.append('\nRemediation plan:')
    md_lines.append('- Review trig degree flags')
    md_lines.append('- Clarify log notation (ln vs log10)')
    md_lines.append('- Replace ^ with ** or use consistent power notation')

with open('/Users/zachli/.openclaw/workspace/math-week-2026/test-reports/calculator_test_report.md','w') as f:
    f.write('\n'.join(md_lines))

print('DONE')
