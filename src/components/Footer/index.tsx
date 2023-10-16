import { FaAngleUp } from "react-icons/fa";
import { StyledFooter } from "./style";
import logo from "../../assets/logoWhite.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt="Motors Shop logo" />
      <h4>© 2022 - Todos os direitos reservados.</h4>
      <a href={"#"}>
        <FaAngleUp />
      </a>
    </StyledFooter>
  );
};

export default Footer;
