import { LoginFormSchema, TLoginFormSchema } from "./loginFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { useContext } from "react";

export const LoginForm = () => {
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <h1>Faça login na sua conta</h1>
      <Input
        id="login"
        type="email"
        label={"Email"}
        placeholder="Digite seu email"
        {...register("email")}
      />
      {errors ? <p>{errors.email?.message}</p> : null}
      <Input
        id="senha"
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      {errors ? <p>{errors.password?.message}</p> : null}
      <button>Entrar</button>
    </form>
  );
};

export default LoginForm;
