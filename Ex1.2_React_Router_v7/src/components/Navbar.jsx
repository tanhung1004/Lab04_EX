
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="route-nav" aria-label="Main navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
