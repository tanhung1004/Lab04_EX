import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PeopleListPage from "./pages/PeopleListPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="people" element={<PeopleListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
