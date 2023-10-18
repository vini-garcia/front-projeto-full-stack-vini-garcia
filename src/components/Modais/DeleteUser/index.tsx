import closeBtn from "../../../assets/x_button.svg";
import { StyledSectionBackGround } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const DeleteAccountModal = () => {
  const { setIsDeleteAccountModalOpen, deleteAccount, user } = useContext(UserContext);

  return (
    <>
      <StyledSectionBackGround>
        <dialog>
          <div>
            <h1>Excluir conta</h1>
            <img
              onClick={() => setIsDeleteAccountModalOpen(false)}
              src={closeBtn}
              alt="Close Button"
            />
          </div>
          <div>
            <h1>Tem certeza que deseja excluir sua conta?</h1>
            <p>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá
              seus dados de nossos servidores.
            </p>
          </div>
          <button onClick={() => deleteAccount(user!.id)}>Sim, excluir conta</button>
          <button onClick={() => setIsDeleteAccountModalOpen(false)}>Cancelar</button>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
