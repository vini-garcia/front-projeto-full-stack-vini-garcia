import { zodResolver } from "@hookform/resolvers/zod";
import { TRegister, registerSchema } from "./registerUserFormSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { StyledSection } from "./style";

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
    <StyledSection>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(registerSubmit)}>
        <h4>Informações pessoais</h4>
        <Input
          id="name"
          placeholder="Ex: Vinicius Garcia"
          type="text"
          label={"Nome"}
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          placeholder="Ex: mail@mail.com"
          type="email"
          label={"Email"}
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          id="cpf"
          placeholder="Ex: 000.000.000-00"
          type="text"
          label={"CPF"}
          error={errors.cpf?.message}
          {...register("cpf")}
        />
        <Input
          id="phone_number"
          placeholder="Ex: 41999998888"
          type="text"
          label={"Celular"}
          error={errors.phone_number?.message}
          {...register("phone_number")}
        />
        <Input
          id="dob"
          placeholder="Ex: 100291"
          type="text"
          label={"Data de nascimento"}
          error={errors.dob?.message}
          {...register("dob")}
        />
        <Input
          id="description"
          placeholder="Ex: Vendedor confiável"
          type="text"
          label={"Descrição"}
          error={errors.description?.message}
          {...register("description")}
        />
        <h4>Informações de endereço</h4>
        <Input
          id="post_code"
          placeholder="Ex: 87888097"
          type="text"
          label={"CEP"}
          error={errors.address?.post_code?.message}
          {...register("address.post_code")}
        />
        <div className="container_one">
          <Input
            id="city"
            placeholder="Ex: Cidade"
            type="text"
            label={"Cidade"}
            error={errors.address?.city?.message}
            {...register("address.city")}
          />
          <Input
            id="state"
            placeholder="Ex: Paraná"
            type="text"
            label={"Estado"}
            error={errors.address?.state?.message}
            {...register("address.state")}
          />
        </div>
        <Input
          id="street_name"
          placeholder="Ex: Rua Dois"
          type="text"
          label={"Rua"}
          error={errors.address?.street_name?.message}
          {...register("address.street_name")}
        />
        <div className="container_two">
          <Input
            id="street_number"
            placeholder="Ex: 213"
            type="text"
            label={"Número"}
            error={errors.address?.street_number?.message}
            {...register("address.street_number")}
          />
          <Input
            id="complement"
            placeholder="Ex: segundo andar"
            type="text"
            label={"Complemento"}
            error={errors.address?.address_complement?.message}
            {...register("address.address_complement")}
          />
        </div>
        <h4 className="formSectionTitles">Tipo de conta</h4>
        <div className="btns_container">
          <Input
            id="type_of_account"
            placeholder="Ex: seller ou buyer"
            type="text"
            label={"Tipo de conta"}
            error={errors.type_of_account?.message}
            {...register("type_of_account")}
          />
        </div>
        <Input
          id="password"
          placeholder="Ex: password"
          type="password"
          label={"Senha"}
          error={errors.password?.message}
          {...register("password")}
        />
        <Input
          id="confirm"
          placeholder="Ex: confirm password"
          type="password"
          label={"Confirmar senha"}
          error={errors.confirm?.message}
          {...register("confirm")}
        />
        <button>Entrar</button>
      </form>
    </StyledSection>
  );
};
