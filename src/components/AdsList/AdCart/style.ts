import styled from "styled-components";

export const StyledCart = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  max-width: 320px;
  width: 320px;
  height: max-content;
  border-radius: 6px;
  position: relative;

  .image > img {
    max-width: 312px;
    height: 152px;
  }

  .card-title {
    color: var(--grey-1);
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  .card-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey-2);
    word-spacing: nowrap;
  }

  .card-bottom {
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        gap: 5px;
      }
      div {
        h6 {
          color: var(--brand-1);
          background-color: var(--brand-3);
          border-radius: 4px;
          padding: 8px;
        }

        h2 {
          color: var(--grey-1);
        }
      }
    }

    display: flex;
    justify-content: space-between;
  }

  &:hover {
    cursor: pointer;
  }
  .buttonsCard {
    display: flex;
    justify-content: flex-start;
    max-width: max-content;
    flex-direction: row;
    margin-top: 10px;

    button {
      border: 1.5px solid var(--grey-0);
      border-radius: 4px;
      padding: 8px 15px;
      font-weight: 600;
    }
  }

  /* display: flex;
  font-family: "Poppins";
  margin: 15px 0;

  width: 312px;
  height: 350px;
  transition: transform 300ms;
  position: relative;
  border: none !important;

  div > img {
    max-width: 312px;
    max-height: 152px;
  } */
`;
