
## Actual Results - M16

### Test Input: Username = "a"

Observed Console Logs:

1. Effect #1: syncToParent("username", "a")
2. Effect #2: validateField()
3. Effect #3: calcFormValidity() = false
4. Effect #4: syncErrorsToChild("username")

Validation Result:
- Username must have at least 3 characters.
- Form Validity: Invalid

Profiler Observations:
- LegacySimpleForm: cumulative commits 4 -> 5 -> 6
- InputField-username: cumulative commits 4 -> 5 -> 6
- InputField-email: cumulative commits 4 -> 5
- Additional update activity appears later in the trace.

Conclusion:
Chained useEffect dependencies cause multiple
committed updates during form validation.

Profiler commit counts are cumulative and do
not directly equal component render counts.

React StrictMode may affect development behavior.
