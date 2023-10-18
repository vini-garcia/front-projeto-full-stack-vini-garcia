import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInputContainer } from "./style";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
}

export const Input = forwardRef(
  ({ label, id, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputContainer>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input ref={ref} id={id} {...rest} />
        {error ? <p>{error}</p> : null}
      </StyledInputContainer>
    );
  }
);
