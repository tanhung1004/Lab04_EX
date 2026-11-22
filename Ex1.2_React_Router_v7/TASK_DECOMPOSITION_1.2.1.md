# =============================================
# EXERCISE 1.2.1 - REACT ROUTER V7
# =============================================

@'
# EXERCISE 1.2.1 - REACT ROUTER V7

## 1. Objective

Upgrade routing syntax to React Router v7
and implement declarative nested route layouts.

Technology: React, JavaScript JSX, Vite, React Router v7.

## 2. Task Decomposition

### Task 1.2.1.1 - Project Configuration

1. Configure the React JSX application.
2. Configure Vite.
3. Install React Router v7.
4. Set up the application entry point.
5. Verify the basic application runs.

Files:
- package.json
- vite.config.js
- src/main.jsx
- src/App.jsx

### Task 1.2.1.2 - Declarative Routing

1. Configure BrowserRouter.
2. Import Routes and Route.
3. Replace the legacy Switch component.
4. Define routes using the element prop.
5. Configure the home and about routes.
6. Test route matching.

Files:
- src/App.jsx
- src/pages/HomePage.jsx
- src/pages/AboutPage.jsx

### Task 1.2.1.3 - Shared Layout

1. Create MainLayout.
2. Separate shared UI from page content.
3. Create a shared navigation area.
4. Configure the parent layout route.
5. Ensure the layout persists between pages.

Files:
- src/layouts/MainLayout.jsx
- src/components/Navbar.jsx

### Task 1.2.1.4 - Nested Routes

1. Define child routes under the layout route.
2. Configure an index route for HomePage.
3. Configure a nested AboutPage route.
4. Import Outlet.
5. Render child page content through Outlet.
6. Verify nested navigation.

### Task 1.2.1.5 - Active Navigation

1. Import NavLink.
2. Create navigation links.
3. Implement the isActive callback.
4. Apply conditional active classes.
5. Style active and inactive links.
6. Verify active styles when changing routes.

Files:
- src/components/Navbar.jsx
- src/styles/index.css

### Task 1.2.1.6 - Testing and Documentation

1. Verify each defined route.
2. Verify shared layout behavior.
3. Verify nested route rendering.
4. Verify active link styling.
5. Verify navigation without full page reload.
6. Run the production build.
7. Capture screenshots.
8. Commit and push the implementation.

## 3. Expected Deliverables

- React Router v7 application.
- Modern Routes and Route syntax.
- element prop for route components.
- Shared MainLayout.
- Nested routing using Outlet.
- Active links using NavLink.
- Build and testing evidence.

'@ | Set-Content "Ex1.2_React_Router_v7\TASK_DECOMPOSITION_1.2.1.md" -Encoding UTF8
