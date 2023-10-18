import closeBtn from "../../../assets/x_button.svg";
import { StyledSectionBackGround } from "./style";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";

export const DeleteAdModal = () => {
  const { deleteAd, currentAd, setIsDeleteAdModalOpen } = useContext(CartContext);

  return (
    <>
      <StyledSectionBackGround>
        <dialog>
          <div>
            <h1>Excluir anúncio</h1>
            <img onClick={() => setIsDeleteAdModalOpen(false)} src={closeBtn} alt="Close Button" />
          </div>
          <div>
            <h1>Tem certeza que deseja remover este anúncio?</h1>
            <p>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente este anúncio de nossos
              servidores.
            </p>
          </div>
          <button onClick={() => deleteAd(currentAd!.id)}>Sim, excluir anúncio</button>
          <button onClick={() => setIsDeleteAdModalOpen(false)}>Cancelar</button>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
