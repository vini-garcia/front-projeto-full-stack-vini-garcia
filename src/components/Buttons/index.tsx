import { Link } from "react-router-dom";
import { StyledButton } from "./style";

export interface IButton {
  text: string;
  customClass: string;
  type: "button" | "submit" | "reset" | undefined;
}

export function FormButton({ text, customClass, type }: IButton) {
  return (
    <StyledButton className={`${customClass} largeButton`} type={type}>
      {text === "Cadastrar" || text === "Login" ? (
        <Link
          className="linkButton"
          to={text === "Cadastrar" ? "/signup" : text === "Login" ? "/login" : "/"}
        >
          {text}
        </Link>
      ) : (
        text
      )}
    </StyledButton>
  );
}
