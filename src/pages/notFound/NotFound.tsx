import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>Não encontramos nada aqui :( </p>
      <Link to="/">Volte ao inicio</Link>
    </>
  );
};

export default NotFound;
