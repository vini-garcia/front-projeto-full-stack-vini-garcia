import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-top: 5rem;
  padding-top: 4.5rem;
  gap: 4.5rem;
  background: linear-gradient(var(--brand-1) 17rem, var(--grey-8) 17rem);

  h2 {
    font-family: "Lexend", sans-serif;
    color: var(--grey-1);
    font-size: 1.25rem;
  }

  .profileHeader {
    width: 1200px;
    background-color: var(--white);
    border-radius: var(--radius-4);
    padding: 3rem 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .profileHeader > span {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  .initialsLetters {
    width: 6.5rem;
    height: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brand-1);
    border-radius: var(--radius-50);
    color: var(--white);
    font-size: 2.25rem;
    font-weight: 600;
  }

  .adsContainer {
    padding: 0 150px;
  }

  .brandLightButton {
    width: 200px;
  }
`;
