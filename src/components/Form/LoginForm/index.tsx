import { LoginFormSchema, TLoginFormSchema } from "./loginFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledSection } from "./style";

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
    <>
      <StyledSection>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(signIn)}>
          <Input
            id="login"
            type="email"
            label={"Email"}
            placeholder="Digite seu e-mail"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            id="senha"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            error={errors.password?.message}
            {...register("password")}
          />
          <button>Entrar</button>
        </form>
        <span>
          <p>Ainda não possui conta?</p>
          <Link to="/signup">Cadastrar</Link>
        </span>
      </StyledSection>
    </>
  );
};

export default LoginForm;
