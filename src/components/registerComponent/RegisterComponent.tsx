import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/slices/reqresSlice";
import { RootState } from "../../feature/store/Store";
import "./RegisterComponent.css";

const RegisterComponent = () => {
  const [email, setEmail] = React.useState("eve.holt@reqres.in");
  const [password, setPassword] = React.useState("pistol");
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const loading = useSelector((state: RootState) => state.reqres.loading);
  const error = useSelector((state: RootState) => state.reqres.error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await dispatch(postLogin({ email, password }));
    if (postLogin.fulfilled.match(response)) {
      navigate("/home");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Registro</h2>
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
