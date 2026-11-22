# =============================================
# EXERCISE 1.3 - FORM VALIDATION
# =============================================

@'
# EXERCISE 1.3 - LEGACY VALIDATION ANTI-PATTERNS

## 1. Objective

Analyze legacy form validation architecture,
identify problematic useEffect dependencies,
and investigate unnecessary rendering behavior.

Technology: React, JavaScript JSX, Vite.

## 2. Task Decomposition

### Task 1.3.1 - Project Configuration

1. Configure React with Vite.
2. Set up App.jsx and main.jsx.
3. Prepare legacy and refactored directories.
4. Create basic form styles.
5. Verify that the application runs.

### Task 1.3.2 - Legacy Form Components

1. Create legacy InputField.
2. Create legacy SimpleForm.
3. Implement local input state.
4. Implement parent form state.
5. Connect field values and validation messages.
6. Identify state shared between components.

Files:
- src/legacy/InputField.jsx
- src/legacy/SimpleForm.jsx

### Task 1.3.3 - Analyze Five useEffect Hooks

1. Analyze useEffect #1: syncToParent().
2. Analyze useEffect #2: validateField().
3. Analyze useEffect #3: calcFormValidity().
4. Analyze useEffect #4: syncErrorsToChild().
5. Analyze useEffect #5: autoScrollToError().
6. Record the dependencies of each effect.
7. Identify effects that trigger state updates.

### Task 1.3.4 - Cascading Re-render Analysis

1. Trigger an input change.
2. Trace local input state updates.
3. Trace parent state synchronization.
4. Trace field validation.
5. Trace form validity calculation.
6. Trace error propagation to the input.
7. Trace auto-scroll behavior.
8. Count the resulting component renders.
9. Compare observations with the slide trace.

Files:
- src/components/RenderCounter.jsx
- docs/RENDER_ANALYSIS.md

### Task 1.3.5 - Race Condition Analysis

1. Identify asynchronous or delayed updates.
2. Test rapid user input where applicable.
3. Examine update ordering.
4. Identify stale validation results.
5. Document possible state inconsistencies.

### Task 1.3.6 - Infinite Loop Risk

1. Analyze effect dependency arrays.
2. Identify circular state dependencies.
3. Explain the maximum update depth error.
4. Document the conditions causing repeated updates.
5. Avoid intentionally locking or crashing the app.

### Task 1.3.7 - Refactoring Comparison

1. Identify unnecessary state synchronization.
2. Decide which state should have a single owner.
3. Separate derived values from stored state.
4. Reduce unnecessary effects.
5. Implement refactored InputField and SimpleForm.
6. Preserve expected form validation behavior.

Files:
- src/refactored/InputField.jsx
- src/refactored/SimpleForm.jsx
- src/validation/formValidation.js

Note:
The supplied slide explicitly documents legacy
anti-patterns. The refactored implementation is
a planned comparison to support the exercise.

### Task 1.3.8 - Performance Comparison

1. Compare legacy and refactored behavior.
2. Measure actual render counts.
3. Compare validation correctness.
4. Verify rapid typing behavior.
5. Document improvements and limitations.
6. Use React DevTools Profiler where useful.

### Task 1.3.9 - Testing and Documentation

1. Test form input and validation.
2. Verify that the refactored form works.
3. Record render analysis findings.
4. Run the production build.
5. Capture screenshots.
6. Update README.
7. Commit and push completed work.

## 3. Expected Deliverables

- Legacy InputField and SimpleForm.
- Analysis of five useEffect hooks.
- Cascading re-render trace.
- Race condition analysis.
- Infinite loop risk analysis.
- Refactored comparison implementation.
- Render analysis document.
- Build and testing evidence.

'@ | Set-Content "Ex1.3_Form_Refactoring\TASK_DECOMPOSITION.md" -Encoding UTF8


Write-Host "All 4 Task Decomposition files written!" -ForegroundColor Green