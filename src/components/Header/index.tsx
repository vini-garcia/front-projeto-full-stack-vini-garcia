import logo from "../../assets/logo.png";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
import burguer_button from "../../assets/burguer_menu.svg";
import closebutton from "../../assets/x_button.svg";

export function Header() {
  return (
    <>
      <StyledHeader>
        <div className="headerMenu">
          <img className="menuLogo" src={logo} alt="Motors Shop logo" />
          <img className="openMenuBtn menuButton" src={burguer_button} aria-label="Abrir Menu" />
          <img
            className="closeMenuBtn menuButton hidden"
            src={closebutton}
            aria-label="Fechar Menu"
          />
        </div>
        <nav className="headerNav hidden">
          <Link className="lightButton1" to="/login">
            Fazer Login
          </Link>
          <Link className="lightButton1" to="/signup">
            Cadastrar
          </Link>
        </nav>
        <div className="headerAfter hidden"></div>
      </StyledHeader>
    </>
  );
}
