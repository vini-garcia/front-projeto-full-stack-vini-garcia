import { zodResolver } from "@hookform/resolvers/zod";
import { TRegister, registerSchema } from "./registerUserFormSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { useForm } from "react-hook-form";
import { Input } from "../Input";

export const RegisterUserForm = () => {
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
      <Input id="name" placeholder="Ex: Vinicius Garcia" type="text" {...register("name")} />
      {errors ? <span>{errors.name?.message}</span> : null}
      <Input id="email" placeholder="Ex: mail@mail.com" type="email" {...register("email")} />
      {errors ? <span>{errors.email?.message}</span> : null}
      <Input id="cpf" placeholder="Ex: 000.000.000-00" type="text" {...register("cpf")} />
      {errors ? <span>{errors.cpf?.message}</span> : null}
      <Input
        id="phone_number"
        placeholder="Ex: 41999998888"
        type="text"
        {...register("phone_number")}
      />
      {errors ? <span>{errors.phone_number?.message}</span> : null}
      <Input id="dob" placeholder="Ex: 100291" type="text" {...register("dob")} />
      {errors ? <span>{errors.dob?.message}</span> : null}
      <Input
        id="description"
        placeholder="Ex: Vendedor confiável"
        type="text"
        {...register("description")}
      />
      {errors ? <span>{errors.description?.message}</span> : null}
      <Input
        id="type_of_account"
        placeholder="Ex: buyer"
        type="text"
        {...register("type_of_account")}
      />
      {errors ? <span>{errors.type_of_account?.message}</span> : null}
      <Input
        id="post_code"
        placeholder="Ex: 87888097"
        type="text"
        {...register("address.post_code")}
      />
      {errors ? <span>{errors.address?.post_code?.message}</span> : null}
      <Input id="state" placeholder="Ex: Paraná" type="text" {...register("address.state")} />
      {errors ? <span>{errors.address?.state?.message}</span> : null}
      <Input id="city" placeholder="Ex: Cidade" type="text" {...register("address.city")} />
      {errors ? <span>{errors.address?.city?.message}</span> : null}
      <Input
        id="street_name"
        placeholder="Ex: Rua Dois"
        type="text"
        {...register("address.street_name")}
      />
      {errors ? <span>{errors.address?.street_name?.message}</span> : null}
      <Input
        id="street_number"
        placeholder="Ex: 213"
        type="text"
        {...register("address.street_number")}
      />
      {errors ? <span>{errors.address?.street_number?.message}</span> : null}
      <Input
        id="complement"
        placeholder="Ex: segundo andar"
        type="text"
        {...register("address.complement")}
      />
      {errors ? <span>{errors.address?.complement?.message}</span> : null}
      <Input id="password" placeholder="Ex: password" type="password" {...register("password")} />
      {errors ? <span>{errors.password?.message}</span> : null}
      <Input
        id="confirm"
        placeholder="Ex: confirm password"
        type="password"
        {...register("confirm")}
      />
      {errors ? <span>{errors.confirm?.message}</span> : null}

      <button>Entrar</button>
    </form>
  );
};
