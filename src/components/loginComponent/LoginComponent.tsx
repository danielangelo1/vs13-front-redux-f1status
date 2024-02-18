import { useForm } from "react-hook-form";
import { Login } from "../../types/Login";
import { LoginSchema } from "../../schemas/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "../../services/reqresApi";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [loginUser, { error, isLoading }] = useLoginMutation();
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

  const onSubmit = (data: Login) => {
    loginUser(data);
    if (error) {
      console.log(error);
    }
    navigate("/home");
  };
  return (
    <div className="register-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <label>Email</label>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label>Senha</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Entrar"}
        </button>
      </form>
      <p>Não possui conta?</p>
      <Link to="/">Cadastre-se</Link>
      <span>
        Use o valor default fornecido para realizar o login com sucesso
      </span>
    </div>
  );
};

export default LoginComponent;
