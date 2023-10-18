import { Link } from "react-router-dom";
import closeBtn from "../../../assets/x_button.svg";
import { StyledSectionBackGround } from "./style";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { useContext } from "react";

export interface IModal {
  text: string;
  link: string;
}

export const SuccessModal = ({ text, link }: IModal) => {
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
            <h1>{text}</h1>
            <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
            {link == "null" ? null : <Link to={link}>Ir para o login</Link>}
          </div>
        </dialog>
      </StyledSectionBackGround>
    </>
  );
};
