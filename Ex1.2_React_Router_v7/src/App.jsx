
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent layout route */}
        <Route path="/" element={<MainLayout />}>

          {/* Default child route */}
          <Route index element={<HomePage />} />

          {/* Nested child route */}
          <Route
            path="about"
            element={<AboutPage />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
