import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2>
        Seja bem-vindo a <span>F1 Status</span>
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
