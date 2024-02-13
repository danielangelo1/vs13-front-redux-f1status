import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">F1 Status</Link>
        <div>
          <Link to="/">Drivers</Link>
          <Link to="/teams">Teams</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
