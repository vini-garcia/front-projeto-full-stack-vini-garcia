import { StyledSectionBackGround } from "./style";
import closeBtn from "../../../assets/x_button.svg";
import { Input } from "../../Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { TEditUser, editSchemaRequest } from "../../Form/RegisterUserForm/registerUserFormSchema";

export const EditAddressModal = () => {
  const { user, editUser, setIsEditAddressModalOpen } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditUser>({
    resolver: zodResolver(editSchemaRequest),
  });

  const handleEditAddressSubmit = (data: TEditUser) => {
    const parsedData = editSchemaRequest.parse(data);
    editUser(parsedData);
  };
  return (
    <>
      <StyledSectionBackGround>
        <dialog>
          <div>
            <h1>Editar endereço</h1>
            <img
              onClick={() => setIsEditAddressModalOpen(false)}
              src={closeBtn}
              alt="Close Button"
            />
          </div>
          <h2>Informações de endereço</h2>
          <form onSubmit={handleSubmit(handleEditAddressSubmit)}>
            <Input
              id="post_code"
              placeholder={user?.address?.post_code}
              type="text"
              label={"CEP"}
              error={errors.address?.post_code?.message}
              {...register("address.post_code")}
            />
            <div className="container_one">
              <Input
                id="city"
                placeholder={user?.address?.city}
                type="text"
                label={"Cidade"}
                error={errors.address?.city?.message}
                {...register("address.city")}
              />
              <Input
                id="state"
                placeholder={user?.address?.state}
                type="text"
                label={"Estado"}
                error={errors.address?.state?.message}
                {...register("address.state")}
              />
            </div>
            <Input
              id="street_name"
              placeholder={user?.address?.street_name}
              type="text"
              label={"Rua"}
              error={errors.address?.street_name?.message}
              {...register("address.street_name")}
            />
            <div className="container_two">
              <Input
                id="street_number"
                placeholder={user?.address?.street_number}
                type="text"
                label={"Número"}
                error={errors.address?.street_number?.message}
                {...register("address.street_number")}
              />
              <Input
                id="complement"
                placeholder={user?.address?.address_complement}
                type="text"
                label={"Complemento"}
                error={errors.address?.address_complement?.message}
                {...register("address.address_complement")}
              />
            </div>
            <div>
              <button>Salvar alterações</button>
            </div>
            <button onClick={() => setIsEditAddressModalOpen(false)}>Cancelar</button>
          </form>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
