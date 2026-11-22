# =============================================
# EXERCISE 1.2.2 - MASTER DETAIL
# =============================================

@'
# EXERCISE 1.2.2 - MASTER DETAIL VIEW

## 1. Objective

Implement a responsive Master-Detail interface
using React Router and CSS Grid.

Technology: React, JavaScript JSX, React Router v7.

Dependency: Exercise 1.2.1.

## 2. Task Decomposition

### Task 1.2.2.1 - Data Preparation

1. Create a sample people dataset.
2. Define a unique ID for each person.
3. Add person attributes such as name and role.
4. Prepare data for list and detail components.

Files:
- src/data/people.js

### Task 1.2.2.2 - Master View

1. Implement PeopleListPage.
2. Render all available people.
3. Create a PersonCard or list item.
4. Add navigation links to person details.
5. Verify correct person IDs in navigation.

Files:
- src/pages/PeopleListPage.jsx
- src/components/PersonCard.jsx

### Task 1.2.2.3 - Dynamic Detail Routing

1. Define a dynamic route using :id.
2. Create PersonDetailPage.
3. Import the useParams hook.
4. Extract the selected ID from the URL.
5. Find the matching person using people.find().
6. Verify that the correct person is displayed.

Files:
- src/App.jsx
- src/pages/PersonDetailPage.jsx

### Task 1.2.2.4 - Responsive CSS Grid

1. Design the Master-Detail container.
2. Apply display: grid.
3. Configure desktop grid-template-columns:
   minmax(280px, 1fr) 2fr.
4. Create suitable spacing between columns.
5. Adjust the layout for smaller screens.
6. Test desktop and mobile layouts.

Files:
- src/styles/index.css

### Task 1.2.2.5 - Semantic HTML

1. Create a definition list using dl.
2. Use dt for attribute names.
3. Use dd for attribute values.
4. Display name and role.
5. Verify the HTML structure is semantic.

Files:
- src/pages/PersonDetailPage.jsx

### Task 1.2.2.6 - Invalid ID and Fallback

1. Check whether the requested person exists.
2. Handle undefined lookup results.
3. Render a NotFound state for invalid IDs.
4. Provide navigation back to the people list.
5. Verify that invalid IDs do not crash the app.

Files:
- src/pages/NotFoundPage.jsx
- src/pages/PersonDetailPage.jsx

### Task 1.2.2.7 - Testing and Documentation

1. Test navigation between people.
2. Test dynamic URL parameters.
3. Test invalid IDs.
4. Test responsive CSS Grid.
5. Verify semantic definition lists.
6. Run the production build.
7. Capture screenshots.
8. Commit and push the implementation.

## 3. Expected Deliverables

- Responsive Master-Detail layout.
- CSS Grid with the required desktop columns.
- Dynamic route parameter extraction.
- Entity lookup using people.find().
- Invalid-ID fallback.
- Semantic dl, dt and dd elements.
- Testing and screenshot evidence.

'@ | Set-Content "Ex1.2_React_Router_v7\TASK_DECOMPOSITION_1.2.2.md" -Encoding UTF8
