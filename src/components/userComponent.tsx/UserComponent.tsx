import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../services/slices/reqresSlice";
import "./UserComponent.css";
import { RootState } from "../../feature/store/Store";

const UserComponent = () => {
  const dispatch = useDispatch<any>();
  const [name, setName] = React.useState("");
  const [job, setJob] = React.useState("");

  const loading = useSelector((state: RootState) => state.reqres.loading);
  const error = useSelector((state: RootState) => state.reqres.error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(postUser({ name, job }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-user-form">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="job">Profissão</label>
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button type="submit">Criar</button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserComponent;
