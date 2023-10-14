import { useForm } from "react-hook-form";
import { TLogin, UserContext } from "../../providers/UserContext/UserContext";
import { useContext } from "react";
import { loginSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";

export const LoginPage = () => {
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(signIn)}>
        <input id="login" type="email" {...register("email")} />
        {errors ? <span>{errors.email?.message}</span> : null}
        <input id="senha" type="password" {...register("password")} />
        {errors ? <span>{errors.password?.message}</span> : null}
        <button>Entrar</button>
      </form>
      <Footer />
    </>
  );
};
