import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  min-width: 22.25rem;
  border-bottom: 2px solid var(--grey-6);
  background-color: var(--grey-10);
  position: absolute;
  top: 0;
  z-index: 1;

  .headerMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    height: 5rem;
    width: 100%;
    position: relative;
    background-color: inherit;
    z-index: 1;
  }

  .menuButton {
    position: absolute;
    right: 1rem;
  }

  .headerNav {
    width: 100%;
    padding: 2rem;
    border-top: 2px solid var(--grey-6);
    box-shadow: 0 40px 40px var(--grey-5);
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    gap: 1.5rem;
    z-index: 1;
  }

  .headerNav.hidden {
    display: none;
  }

  .headerAfter.hidden {
    display: none;
  }

  .headerAfter {
    content: "";
    background-color: var(--backdrop);
    height: 100vh;
    width: 100vw;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }

  @media (min-width: 768.1px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3.75rem;
    height: 5rem;

    .headerMenu {
      padding-left: 0;
      height: fit-content;
      width: fit-content;
    }

    .menuLogo {
      height: 2.25rem;
    }

    .headerNav.hidden,
    .headerNav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      width: fit-content;
      padding: 0;
      padding-left: 2.75rem;
      border-left: 2px solid var(--grey-6);
      border-top: none;
      box-shadow: none;
      flex-direction: row;
    }
    .openMenuBtn {
      display: none;
    }

    .closeMenuBtn {
      display: none;
    }
  }
`;
