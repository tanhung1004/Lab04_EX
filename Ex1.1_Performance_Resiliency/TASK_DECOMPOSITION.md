# EXERCISE 1.1 - TYPESCRIPT

# EXERCISE 1.1 - PERFORMANCE & RESILIENCY

## 1. Objective

Refactor a React TypeScript application to improve
loading performance, resilience, layout stability,
and accessibility.

Technology: React, TypeScript, Vite.

## 2. Task Decomposition

### Task 1.1.1 - Project Configuration

1. Configure React with TypeScript and Vite.
2. Set up the application entry point.
3. Configure the main App component.
4. Prepare the initial styling.
5. Verify the basic application runs.

Files:
- package.json
- index.html
- vite.config.ts
- tsconfig.json
- src/main.tsx
- src/App.tsx

### Task 1.1.2 - Data and Component Structure

1. Define the Person TypeScript interface.
2. Create sample people data.
3. Implement PeopleListPage.
4. Implement PersonDetailPage.
5. Prepare navigation to the detail view.

Files:
- src/types/person.ts
- src/data/people.ts
- src/pages/PeopleListPage.tsx
- src/pages/PersonDetailPage.tsx

### Task 1.1.3 - Code Splitting

1. Identify the detail page for lazy loading.
2. Replace the static component import.
3. Implement React.lazy().
4. Use a dynamic import for PersonDetailPage.
5. Verify that a separate JavaScript chunk is generated.

Expected result:
PersonDetail is loaded on demand instead
of being included in the initial application bundle.

### Task 1.1.4 - Suspense Boundaries

1. Import Suspense from React.
2. Wrap the lazy-loaded component.
3. Define the fallback property.
4. Verify that fallback UI appears while loading.
5. Verify that the detail component replaces the fallback.

Files:
- src/App.tsx
- src/pages/PersonDetailPage.tsx

### Task 1.1.5 - Skeleton Loading

1. Create PersonDetailSkeleton.
2. Match the layout dimensions of PersonDetail.
3. Apply appropriate loading styles.
4. Prevent unnecessary layout movement.
5. Test the loading transition.

Files:
- src/components/PersonDetailSkeleton.tsx
- src/styles/index.css

### Task 1.1.6 - Accessibility

1. Apply aria-busy to the loading state.
2. Apply aria-live="polite" where appropriate.
3. Ensure loading indicators are accessible.
4. Verify screen reader announcements.
5. Verify basic keyboard accessibility.

### Task 1.1.7 - Performance Verification

1. Run the production build.
2. Inspect generated chunks.
3. Test lazy loading in the browser.
4. Inspect layout shifts using browser tools.
5. Measure CLS and check the target of zero.
6. Verify the application remains functional.

### Task 1.1.8 - Documentation and Git

1. Record implementation details.
2. Document the loading workflow.
3. Capture browser screenshots.
4. Record build and performance results.
5. Commit changes by implementation stage.
6. Push completed work to GitHub.

## 3. Expected Deliverables

- React TypeScript application.
- Lazy-loaded PersonDetail component.
- Suspense loading boundary.
- Dimension-matched Skeleton UI.
- Accessibility attributes.
- Performance verification evidence.
- Git commit history and README.

'@ | Set-Content "Ex1.1_Performance_Resiliency\TASK_DECOMPOSITION.md" -Encoding UTF8
