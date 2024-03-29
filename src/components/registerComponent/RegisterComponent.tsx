import { useRegisterMutation } from "../../services/reqresApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { Login } from "../../types/Login";
import { LoginSchema } from "../../schemas/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import "./RegisterComponent.css";
import { Link, useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [registerUser, { error, isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Login>({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });

  const onSubmit: SubmitHandler<Login> = (data: Login) => {
    registerUser(data);
    if (error) {
      console.log(error);
    }
    navigate("/login");
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2>Cadastro</h2>
        <label>Email</label>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label>Senha</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Cadastrar"}
        </button>
      </form>
      <p>Já possui conta?</p>
      <Link to="/login">Faça login</Link>
      <span>
        A API não está permitindo cadastrar novos usuários :( Use o valor
        default fornecido para realizar o registro com sucesso
      </span>
    </div>
  );
};

export default RegisterComponent;
