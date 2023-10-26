import { StyledSectionBackGround } from "./style";
import closeBtn from "../../../assets/x_button.svg";
import { Input } from "../../Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { TEditUser, editSchemaRequest } from "../../Form/RegisterUserForm/registerUserFormSchema";

export const EditUserModal = () => {
  const { user, editUser, setIsEditUSerModalOpen } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditUser>({
    resolver: zodResolver(editSchemaRequest),
  });

  const handleEditUserSubmit = (data: TEditUser) => {
    const parsedData = editSchemaRequest.parse(data);
    editUser(parsedData);
  };
  return (
    <>
      <StyledSectionBackGround>
        <dialog>
          <div>
            <h1>Editar Perfil</h1>
            <img onClick={() => setIsEditUSerModalOpen(false)} src={closeBtn} alt="Close Button" />
          </div>
          <h2>Informações pessoais</h2>
          <form onSubmit={handleSubmit(handleEditUserSubmit)}>
            <Input
              id="name"
              placeholder={user?.name}
              type="text"
              label={"Nome"}
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              id="email"
              placeholder={user?.email}
              type="email"
              label={"Email"}
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              id="cpf"
              placeholder={user?.cpf}
              type="text"
              label={"CPF"}
              error={errors.cpf?.message}
              {...register("cpf")}
            />
            <Input
              id="phone_number"
              placeholder={user?.phone_number}
              type="text"
              label={"Celular"}
              error={errors.phone_number?.message}
              {...register("phone_number")}
            />
            <Input
              id="dob"
              placeholder={user?.dob}
              type="text"
              label={"Data de nascimento"}
              error={errors.dob?.message}
              {...register("dob")}
            />
            <Input
              id="description"
              placeholder={user?.description}
              type="text"
              label={"Descrição"}
              error={errors.description?.message}
              {...register("description")}
            />
            <div>
              <button>Salvar alterações</button>
            </div>
            <button>Excluir perfil</button>
            <button onClick={() => setIsEditUSerModalOpen(false)}>Cancelar</button>
          </form>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
