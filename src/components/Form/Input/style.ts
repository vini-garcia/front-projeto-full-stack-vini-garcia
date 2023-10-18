import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  overflow-y: auto;
  scroll-behavior: smooth;
  resize: none;
  outline: none;

  label {
    font-size: 0.875rem;
    color: var(--grey-1);
  }

  input {
    width: 100%;
    height: 3rem;
    background-color: inherit;
    border: 1.5px solid var(--grey-7);
    border-radius: var(--radius-4);
    color: var(--grey-3);
    font-size: 1rem;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
  }

  p {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--alert-0);
  }
`;
