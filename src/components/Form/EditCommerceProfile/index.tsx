import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editCommerceProfileSchema } from "./editCommerceProfileSchema";
import { Input } from "../Input";
import { IRegisterUserFormData } from "../RegisterCommerceForm";
import { useContext } from "react";
import { CommerceContext } from "../../../providers/CommerceProvider";
import { StyledEditCommerceProfileModal } from "./style";

export const EditCommerceProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserFormData>({
    resolver: zodResolver(editCommerceProfileSchema),
  });

  const { editCommerceProfile, setIsEditProfileModalOpen } = useContext(CommerceContext);
  const userNameCommerce = localStorage.getItem("@EatSmart:userNameCommerce");
  const emailUserCommerce = localStorage.getItem("@EatSmart:userCommerceEmail");

  const editCommerceProfileSubmit: SubmitHandler<IRegisterUserFormData> = (
    newCommerceProfileData
  ) => {
    editCommerceProfile(newCommerceProfileData);
    setIsEditProfileModalOpen(false);
  };

  return (
    <StyledEditCommerceProfileModal role="dialog">
      <div className="container_editProfile">
        <nav>
          <button onClick={() => setIsEditProfileModalOpen(false)}>X</button>
        </nav>
        <form onSubmit={handleSubmit(editCommerceProfileSubmit)}>
          <h3>Edite seu perfil</h3>
          <Input
            type="text"
            label="Nome"
            placeholder={userNameCommerce?.toString()}
            id="userName"
            {...register("userName")}
            error={errors.userName}
          />
          <Input
            type="email"
            label="Email"
            placeholder={emailUserCommerce?.toString()}
            id="email"
            {...register("email")}
            error={errors.email}
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Sua senha"
            id="password"
            {...register("password")}
            error={errors.password}
          />
          <Input
            type="password"
            label="Confirmar Senha"
            placeholder="Confirmar alteração de senha"
            id="confirmPassword"
            {...register("confirmPassword")}
            error={errors.confirmPassword}
          />
          <button type="submit">Salvar alterações</button>
        </form>
        <button onClick={() => setIsEditProfileModalOpen(false)}>Voltar para loja</button>
      </div>
    </StyledEditCommerceProfileModal>
  );
};
