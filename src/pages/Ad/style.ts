import styled from "styled-components";

export const StyledMain = styled.main`
  /* padding-top: 200px; */

  .purpleBackGound{
    width: 100%;
    height: 357px;
    background-color: purple;
  }

  .seller_info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--grey-2);
    font-size: 0.875rem;
  }
  .seller_info > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: var(--radius-50);
    background-color: var(--random-1);
    color: var(--white);
  }
`;
