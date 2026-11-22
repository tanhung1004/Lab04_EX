
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PeopleListPage from "./pages/PeopleListPage";
import PersonDetailPage from "./pages/PersonDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="about"
            element={<AboutPage />}
          />

          {/* Master-Detail nested routes */}
          <Route
            path="people"
            element={<PeopleListPage />}
          >
            <Route
              index
              element={
                <section className="detail-panel detail-placeholder">
                  <h2>Person Details</h2>
                  <p>
                    Select a person from the list
                    to view their information.
                  </p>
                </section>
              }
            />

            <Route
              path=":id"
              element={<PersonDetailPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
