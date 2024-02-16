import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/slices/reqresSlice";
import { RootState } from "../../feature/store/Store";

const RegisterComponent = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const loading = useSelector((state: RootState) => state.reqres.loading);
  const error = useSelector((state: RootState) => state.reqres.error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(postLogin({ email, password }));
    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterComponent;
