
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="route-nav" aria-label="Main navigation">

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About
      </NavLink>

    </nav>
  );
}
