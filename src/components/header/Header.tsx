import { Link } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import { changeSeason } from "../../feature/seasonSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleChangeSeason = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeSeason(Number(event.target.value)));
  };

  return (
    <header>
      <nav>
        <Link to="/">F1 Status</Link>
        <div>
          <select onChange={handleChangeSeason}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
          </select>

          <Link to="/">Pilotos</Link>
          <Link to="/teams">Equipes</Link>
          <Link to="/favorites">Meus favoritos </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
