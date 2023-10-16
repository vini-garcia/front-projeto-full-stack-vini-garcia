import styled from "styled-components";

export const UserIconStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    padding: 16px;
    color: white;
    font-size: 10px;
    background-color: var(--brand-1);
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }

  h3 {
    color: var(--grey-2);
    font-family: "Inter", sans-serif;
    font-size: 10px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  &:hover {
    cursor: pointer;
  }
`;