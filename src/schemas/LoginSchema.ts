import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email deve ser válido")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});
