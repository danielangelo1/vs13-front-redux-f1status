import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "10rem",
      }}
    >
      <p>Não encontramos nada aqui :( </p>
      <Link to="/">Volte ao inicio</Link>
    </section>
  );
};

export default NotFound;
