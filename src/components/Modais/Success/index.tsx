import { Link } from "react-router-dom";
import closeBtn from "../../../assets/x_button.svg";
import { StyledSectionBackGround } from "./style";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { useContext } from "react";

export const SuccessModal = () => {
  const { setIsSuccessModalOpen } = useContext(UserContext);

  return (
    <>
      <StyledSectionBackGround>
        <dialog>
          <div>
            <h1>Sucesso!</h1>
            <img onClick={() => setIsSuccessModalOpen(false)} src={closeBtn} alt="Close Button" />
          </div>
          <div>
            <h1>Sua conta foi criada com sucesso!</h1>
            <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
            <Link to="/login">Ir para o login</Link>
          </div>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
