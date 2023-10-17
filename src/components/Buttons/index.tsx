import { Link } from "react-router-dom";
import { StyledButton } from "./style";

export interface IFormButtonProps {
  text: string;
  customClass: string;
  disabled?: boolean;
}

export function FormButton({ text, customClass, disabled }: IFormButtonProps) {
  return (
    <StyledButton className={`${customClass} largeButton`} disabled={disabled}>
      {text === "Cadastrar" || text === "Login" ? (
        <Link
          className="linkButton"
          to={text === "Cadastrar" ? "/register" : text === "Login" ? "/login" : "/"}
        >
          {text}
        </Link>
      ) : (
        text
      )}
    </StyledButton>
  );
}
