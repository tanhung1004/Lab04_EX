
# Exercise 1.2 - React Router v7

## Overview

Implementation of declarative routing and a responsive
Master-Detail interface using React Router v7.

## Technology

- React
- JavaScript (JSX)
- Vite
- React Router v7
- CSS Grid

## Exercise 1.2.1 - Declarative Routing

Implemented features:

1. BrowserRouter configuration
2. Routes and Route components
3. Route element property
4. Shared MainLayout
5. Nested routes with Outlet
6. NavLink and active navigation styling

## Exercise 1.2.2 - Master-Detail View

Implemented features:

1. People directory with sample data
2. Responsive CSS Grid layout
3. Dynamic routing with /people/:id
4. Route parameter extraction using useParams
5. Person lookup using Array.find
6. Invalid person ID handling
7. Global 404 fallback
8. Semantic HTML with dl, dt and dd

## Running the Project

npm install
npm run dev

## Production Build

npm run build

## Routes

/             - Home
/about        - About
/people       - People Directory
/people/:id   - Person Detail
/*            - Not Found

## Testing

Verify navigation, nested routes, active links,
person selection, invalid IDs, responsive layout,
and production build.

## Conclusion

The application demonstrates React Router v7
declarative routing, reusable layouts, dynamic
URL parameters, and responsive Master-Detail UI.
