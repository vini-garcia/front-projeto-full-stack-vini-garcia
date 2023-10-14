import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { TRegister, registerSchema } from "./schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const Register = () => {
  const { registerSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(registerSubmit)}>
      <input id="name" placeholder="Ex: Samuel Leão" type="text" {...register("name")} />
      {errors ? <span>{errors.name?.message}</span> : null}
      <input id="email" placeholder="Ex: mail@mail.com" type="email" {...register("email")} />
      {errors ? <span>{errors.email?.message}</span> : null}
      <input id="cpf" placeholder="Ex: 000.000.000-00" type="text" {...register("cpf")} />
      {errors ? <span>{errors.cpf?.message}</span> : null}
      <input
        id="phone_number"
        placeholder="Ex: telefone"
        type="text"
        {...register("phone_number")}
      />
      {errors ? <span>{errors.phone_number?.message}</span> : null}
      <input id="dob" placeholder="Ex: dob" type="text" {...register("dob")} />
      {errors ? <span>{errors.dob?.message}</span> : null}
      <input
        id="description"
        placeholder="Ex: descrição"
        type="text"
        {...register("description")}
      />
      {errors ? <span>{errors.description?.message}</span> : null}
      <input
        id="type_of_account"
        placeholder="Ex: tipo de conta"
        type="text"
        {...register("type_of_account")}
      />
      {errors ? <span>{errors.type_of_account?.message}</span> : null}
      <input id="post_code" placeholder="Ex: post" type="text" {...register("address.post_code")} />
      {errors ? <span>{errors.address?.post_code?.message}</span> : null}
      <input id="state" placeholder="Ex: estado" type="text" {...register("address.state")} />
      {errors ? <span>{errors.address?.state?.message}</span> : null}
      <input id="city" placeholder="Ex: Cidade" type="text" {...register("address.city")} />
      {errors ? <span>{errors.address?.city?.message}</span> : null}
      <input
        id="street_name"
        placeholder="Ex: Rua"
        type="text"
        {...register("address.street_name")}
      />
      {errors ? <span>{errors.address?.street_name?.message}</span> : null}
      <input
        id="street_number"
        placeholder="Ex: Número"
        type="text"
        {...register("address.street_number")}
      />
      {errors ? <span>{errors.address?.street_number?.message}</span> : null}
      <input
        id="complement"
        placeholder="Ex: Complemento"
        type="text"
        {...register("address.complement")}
      />
      {errors ? <span>{errors.address?.complement?.message}</span> : null}
      <input id="password" placeholder="Ex: password" type="password" {...register("password")} />
      {errors ? <span>{errors.password?.message}</span> : null}
      <input id="confirm" placeholder="Ex: confirm" type="password" {...register("confirm")} />
      {errors ? <span>{errors.confirm?.message}</span> : null}
      
      <button>Entrar</button>
    </form>
  );
};
