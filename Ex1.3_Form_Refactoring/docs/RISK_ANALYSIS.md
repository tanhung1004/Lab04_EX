
# M17 - Race Conditions & Infinite Loop Risk

## 1. Objective

Analyze asynchronous validation race conditions
and circular useEffect dependency risks.

## 2. Race Condition Analysis

The original M15 validation is synchronous.

M17 introduces an independent asynchronous
simulation with two validation requests:

1. Input "a" - slow validation, 900 ms
2. Input "abc" - fast validation, 150 ms

The second input is scheduled 80 ms after the first.

Expected behavior:

- "abc" resolves before "a".
- Unsafe validation may display the stale result.
- Safe validation ignores outdated results.

## 3. Infinite Loop Risk

The legacy form stores multiple dependent states:

- formData
- errors
- isFormValid
- localError

A circular dependency may occur when an Effect
updates a state value that is also its dependency,
without stabilizing the result.

For example, including errors as a dependency
while recreating errors on every execution can
cause repeated updates.

## 4. Observed Results

Record the actual results after testing.

Race Condition:
- Latest input:
- Unsafe result:
- Safe result:
- Console observations:

Infinite Loop:
- Dependency chain reviewed:
- Risk identified:
- No intentional infinite loop executed.

## 5. Conclusion

Asynchronous validation requires stale-result
protection.

Redundant state synchronization and unstable
Effect dependencies should be eliminated during
refactoring.
