import logo from "../../assets/logo.png";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div>
          <img src={logo} alt="Logo Motors Shop" />
        </div>
        <div>
          <Link to={"/login"}>Fazer Login</Link>
          <Link to={"/signup"}>Cadastrar</Link>
        </div>
      </StyledHeader>
    </>
  );
};
