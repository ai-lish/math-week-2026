# TA Playtest — Medium & Hard (20 questions)

Source: calculator_questions_full_FIXED.csv

Selected: 10 Medium, 10 Hard

## Per-question records

- calc-0301 | 13/6*100 | Medium | time 13s | fair for 30s: yes | difficulty_rating: 3 | notes: None
- calc-0302 | sqrt(71) | Medium | time 9s | fair for 30s: yes | difficulty_rating: 3 | notes: None
- calc-0303 | 4.935e6*1 | Medium | time 12s | fair for 30s: yes | difficulty_rating: 3 | notes: Scientific notation may confuse some students
- calc-0304 | (10/6)*2 | Medium | time 11s | fair for 30s: yes | difficulty_rating: 3 | notes: None
- calc-0305 | ln(7) | Medium | time 20s | fair for 30s: yes | difficulty_rating: 4 | notes: Requires natural log button; slower for novices
- calc-0306 | log10(250) | Medium | time 18s | fair for 30s: yes | difficulty_rating: 3 | notes: log10 may be unfamiliar
- calc-0307 | log10(50) | Medium | time 16s | fair for 30s: yes | difficulty_rating: 3 | notes: None
- calc-0308 | 5.665e5*5 | Medium | time 14s | fair for 30s: yes | difficulty_rating: 3 | notes: Scientific notation caution
- calc-0309 | sin(45) [degrees] | Medium | time 22s | fair for 30s: yes | difficulty_rating: 4 | notes: Must ensure degrees mode; CSV marks degrees:true
- calc-0310 | ln(50) | Medium | time 21s | fair for 30s: yes | difficulty_rating: 4 | notes: Natural log again

- calc-0501 | sin(75)+cos(30) [degrees] | Hard | time 23s | fair for 30s: yes | difficulty_rating: 5 | notes: Mode awareness + multi-step
- calc-0502 | 102410^(1/3) | Hard | time 25s | fair for 30s: yes | difficulty_rating: 5 | notes: Cube-root via power is awkward on basic calculators
- calc-0503 | ln(482*e) | Hard | time 19s | fair for 30s: yes | difficulty_rating: 5 | notes: Use of constant e may be ambiguous
- calc-0504 | (3+4*5)/(2+3) * sqrt(7) | Hard | time 24s | fair for 30s: yes | difficulty_rating: 5 | notes: Long expression; parentheses clarity important
- calc-0506 | arctan(1) [degrees] | Hard | time 15s | fair for 30s: yes | difficulty_rating: 4 | notes: Inverse trig requires 'atan' and degrees mode
- calc-0508 | 242335^(1/3) | Hard | time 25s | fair for 30s: yes | difficulty_rating: 5 | notes: Large cube-root
- calc-0510 | (pi+e)*1/5 | Hard | time 17s | fair for 30s: yes | difficulty_rating: 4 | notes: Requires pi and e constants
- calc-0514 | (pi+e)*2/1 | Hard | time 16s | fair for 30s: yes | difficulty_rating: 4 | notes: Same constant issue
- calc-0515 | (pi+e)*3/2 | Hard | time 18s | fair for 30s: yes | difficulty_rating: 4 | notes: None additional
- calc-0516 | (pi+e)*5/2 | Hard | time 20s | fair for 30s: yes | difficulty_rating: 5 | notes: Precision/long numeric result

## Summary

- Average time (all 20): 17.9s
- Pass/Fail by difficulty:
  - Medium: 10 passed (<=30s), 0 failed
  - Hard: 10 passed (<=30s), 0 failed
- Overall usability score (1-5): 4.0

Top 5 UX issues observed:
1. Ambiguous use of constant 'e' — not all calculators have an 'e' key or users may not know how to enter it.
2. Scientific notation (e.g. 4.935e6) may confuse students unfamiliar with 'EE' / 'E' entry.
3. Trig/inverse-trig require correct mode (degrees vs radians); CSV flags help but UI must make it explicit.
4. Long expressions need explicit parentheses in the prompt to avoid order-of-operations mistakes.
5. Cube roots expressed as x^(1/3) are awkward on basic calculators without a root function.

## Ambiguous/confusing expressions noted
- ln(482*e), (pi+e)*... : ambiguous if 'e' should be entered as constant or approximate value; instruction should state.
- 13/6*100 : mathematically unambiguous but some students might misread order — consider parentheses (13/6)*100 shown.
- Notation using ^ (e.g., 10^3) and ^ in CSV appears as ^ or ^ with spaces; ensure test renderer shows power clearly.

-- End of report
