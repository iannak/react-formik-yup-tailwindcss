import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .min(6, "No mínimo 6 caracteres")
    .required("Senha obrigatória"),
});
