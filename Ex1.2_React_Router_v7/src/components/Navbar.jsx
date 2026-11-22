
import { NavLink } from "react-router";

export default function Navbar() {
  const getClassName = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="route-nav" aria-label="Main navigation">
      <NavLink to="/" end className={getClassName}>
        Home
      </NavLink>

      <NavLink to="/about" className={getClassName}>
        About
      </NavLink>

      <NavLink to="/people" className={getClassName}>
        People
      </NavLink>
    </nav>
  );
}
