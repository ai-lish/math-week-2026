TA Playtest — Calculator sample (20 plays)

Summary:
- Played 20 calculator questions (calc-001 through calc-020).
- Simulated human answer times between ~6–12 seconds per question for this set.
- Overall usability is good for basic arithmetic and common calculator functions. Mild suggestions around notation, operator precedence hints, and optional display toggles.

Individual results (id | expression | time (s) | fair for 30s? | score | notes / improvements):

- calc-001 | 24/3 | 6.8s | fair | 5 | Straightforward division. No UI issues.
- calc-002 | 7+5 | 6.1s | fair | 5 | Simple addition.
- calc-003 | 15-8 | 6.5s | fair | 5 | Simple subtraction.
- calc-004 | 9*6 | 7.2s | fair | 5 | Multiplication — clear.
- calc-005 | 0.75*16 | 8.9s | fair | 5 | Decimal multiplication — notation OK. Suggest fixed-decimal hint for novices.
- calc-006 | 5/8*64 | 10.4s | fair | 4 | Fraction then multiply; parentheses could help novices. Suggest showing (5/8)*64.
- calc-007 | 0.25*240 | 7.6s | fair | 5 | Percentage-style calculation feels fine.
- calc-008 | 0.125+0.375 | 9.0s | fair | 4 | Decimal addition — allow toggling between rounded and exact answers.
- calc-009 | 14/0.7 | 9.8s | fair | 5 | Division by decimal — formatting should be clear (÷ or /).
- calc-010 | 6^2 | 7.4s | fair | 5 | Exponent notation ^ OK; render superscript if possible.
- calc-011 | sqrt(49) | 8.2s | fair | 5 | Root notation clear; show √ symbol as well.
- calc-012 | 27^(1/3) | 11.3s | fair | 4 | Fractional exponent may confuse novices; offer cube-root shortcut.
- calc-013 | 0.2*1000 | 7.0s | fair | 5 | Scientific notation: show both standard and scientific forms on demand.
- calc-014 | 3/8 | 8.6s | fair | 5 | Fraction display good; offer simplified fraction toggle.
- calc-015 | 0.45*200 | 8.1s | fair | 5 | Percentage-style; straightforward.
- calc-016 | (1/3)*3 | 10.0s | fair | 5 | Parentheses remove ambiguity; encourage them in hints.
- calc-017 | 5+3*2 | 9.7s | fair | 4 | Operator precedence could trip some users; show evaluated steps or note PEMDAS.
- calc-018 | (5+3)*2 | 8.9s | fair | 5 | Brackets explicit; clear.
- calc-019 | 100/4-3 | 12.2s | fair | 4 | Mixed operations; suggest (100/4)-3 hint for clarity.
- calc-020 | 8*0.125 | 7.3s | fair | 5 | Decimal multiplication easy.

Top-level suggestions:
1) Display clarity
   - Render common math notation (superscripts, √, ÷) in the UI so expressions are immediately readable.
   - Offer a toggle between rounded (3sf) and exact/full-precision results.
2) Help for novices
   - Provide subtle inline hints for operator precedence or suggest parentheses when an expression may be ambiguous.
   - Add shortcuts for common operations (cube root, percent, scientific notation conversion).
3) Accessibility
   - Ensure large-font rendering for operators and responsive layout on small screens.

Files produced:
- JSON results: math-week-2026/test-reports/ta_playtest_report.json
- Markdown summary: math-week-2026/test-reports/ta_playtest_report.md

End of report.
