import styled from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  min-width: 18.75rem;
  max-width: 25.75rem;
  height: fit-content;
  padding: 2.75rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--grey-10);
  border-radius: var(--radius-4);

  h2 {
    width: 100%;
    font-size: 1.5rem;
    font-family: "Lexend", sans-serif;
    text-align: left;
    color: #000000;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
  }

  span {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    p {
      font-size: 0.875rem;
      color: inherit;
    }
  }
`;
