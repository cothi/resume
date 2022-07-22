import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/"> About </Link>
      <Link to="/projects"> Projects </Link>
    </div>
  );
}
