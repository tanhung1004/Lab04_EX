
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <div className="container">
          <span className="label">
            LAB 04 / EXERCISE 1.2.1
          </span>

          <nav className="route-nav" aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/about"
              element={<AboutPage />}
            />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}
