
import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router";

import ErrorBoundary from "./components/ErrorBoundary";
import PersonDetailSkeleton from "./components/PersonDetailSkeleton";
import PeopleListPage from "./pages/PeopleListPage";

// Code Splitting: load PersonDetail only when needed
const PersonDetailPage = lazy(
  () => import("./pages/PersonDetailPage")
);

function LazyDetailRoute() {
  const location = useLocation();

  return (
    <ErrorBoundary key={location.pathname}>
      <Suspense fallback={<PersonDetailSkeleton />}>
        <PersonDetailPage />
      </Suspense>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="site-header">
          <div className="container header-inner">
            <Link to="/" className="brand">
              LAB 04 <span>/ Exercise 1.1</span>
            </Link>

            <span className="header-tag">
              React + TypeScript
            </span>
          </div>
        </header>

        <main className="container main-content">
          <Routes>
            <Route
              path="/"
              element={<PeopleListPage />}
            />

            <Route
              path="/people/:id"
              element={<LazyDetailRoute />}
            />

            <Route
              path="*"
              element={
                <section className="detail-card detail-empty">
                  <h1>404</h1>
                  <p>Trang này không tồn tại.</p>
                  <Link className="btn" to="/">
                    Về trang chủ
                  </Link>
                </section>
              }
            />
          </Routes>
        </main>

        <footer className="site-footer">
          LAB 04 · Performance &amp; Resiliency ·
          React.lazy + Suspense
        </footer>
      </div>
    </BrowserRouter>
  );
}
