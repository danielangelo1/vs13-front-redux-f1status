import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">F1 Status</Link>
        <div>
          <Link to="/">Pilotos</Link>
          <Link to="/teams">Equipes</Link>
          <Link to="/favoriteDriver">Meus Pilotos </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
