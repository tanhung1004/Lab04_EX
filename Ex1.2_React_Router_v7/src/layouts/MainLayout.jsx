
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <main className="app">
      <div className="container">
        <span className="label">
          LAB 04 / EXERCISE 1.2.1
        </span>

        {/* Shared navigation */}
        <Navbar />

        {/* Render nested child routes */}
        <Outlet />
      </div>
    </main>
  );
}
