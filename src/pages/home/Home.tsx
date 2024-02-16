import { useAppSelector } from "../../feature/hooks/Hooks";
import "./Home.css";

const Home = () => {
  const name = useAppSelector((state) => state.reqres.users[0].name);
  return (
    <div className="home-container">
      <h2>
        {name}, Seja bem-vindo <span>F1 Status</span>
      </h2>
      <div className="text">
        <p>
          Aqui você pode acompanhar as informações da Fórmula 1, como pilotos,
          equipes, classificação, pontos e muito mais.
        </p>

        <p>
          Para começar, selecione o ano desejado no header e escolha entre as
          opções disponíveis.
        </p>

        <p>
          Aproveite para adicionar seus pilotos e equipes favoritos na aba de
          favoritos.
        </p>
      </div>
    </div>
  );
};

export default Home;
