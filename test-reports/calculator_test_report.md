# Calculator test report
Total rows: 600
Passes: 566
Fails: 34

Top fail examples:
- calc-0303: 4.935e6*1 — provided: 3.45e+07 computed: 4940000.0 reason: mismatch
- calc-0308: 5.665e5*5 — provided: 1.7e+06 computed: 2830000.0 reason: mismatch
- calc-0315: 1.792e4*6 — provided: 3.58e+04 computed: 108000.0 reason: mismatch
- calc-0331: 9.385e4*9 — provided: 4.69e+05 computed: 845000.0 reason: mismatch
- calc-0333: 3.191e6*3 — provided: 2.23e+07 computed: 9570000.0 reason: mismatch
- calc-0341: 8.779e5*9 — provided: 7.02e+06 computed: 7900000.0 reason: mismatch
- calc-0359: 8.843e2*2 — provided: 3.54e+03 computed: 1770.0 reason: mismatch
- calc-0371: 9.206e3*4 — provided: 7.36e+04 computed: 36800.0 reason: mismatch
- calc-0379: 1.959e5*6 — provided: 9.8e+05 computed: 1180000.0 reason: mismatch
- calc-0384: 8.487e4*4 — provided: 5.09e+05 computed: 339000.0 reason: mismatch
- calc-0394: 9.697e4*6 — provided: 1.94e+05 computed: 582000.0 reason: mismatch
- calc-0395: 9.656e3*4 — provided: 6.76e+04 computed: 38600.0 reason: mismatch
- calc-0400: 4.314e4*7 — provided: 2.59e+05 computed: 302000.0 reason: mismatch
- calc-0402: 1.225e6*6 — provided: 4.9e+06 computed: 7350000.0 reason: mismatch
- calc-0407: 2.044e3*9 — provided: 6.13e+03 computed: 18400.0 reason: mismatch
- calc-0415: 9.545e4*2 — provided: 5.73e+05 computed: 191000.0 reason: mismatch
- calc-0435: 7.994e6*2 — provided: 6.4e+07 computed: 16000000.0 reason: mismatch
- calc-0440: 8.617e5*2 — provided: 6.89e+06 computed: 1720000.0 reason: mismatch
- calc-0441: 1.661e2*6 — provided: 498 computed: 997.0 reason: mismatch
- calc-0449: 8.984e5*6 — provided: 7.19e+06 computed: 5390000.0 reason: mismatch

Remediation plan:
- Review trig degree flags
- Clarify log notation (ln vs log10)
- Replace ^ with ** or use consistent power notation