import closeBtn from "../../../assets/x_button.svg";
import { StyledSectionBackGround } from "./style";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";

export const ImageModal = () => {
  const { setIsImageModalOpen, currentImage } = useContext(CartContext);

  return (
    <>
      <StyledSectionBackGround>
        <dialog>
          <div>
            <h1>Imagem do veículo</h1>
            <img onClick={() => setIsImageModalOpen(false)} src={closeBtn} alt="Close Button" />
          </div>
          <div>
            <img src={currentImage} alt="Imagem veículo" />
          </div>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
