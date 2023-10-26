import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: 5rem;
  background: linear-gradient(var(--brand-1) 34rem, var(--grey-8) 34rem);
  padding-bottom: 50px;

  .mainContainer {
    margin: 0 auto;
    width: 75%;
    padding: 2.5rem 0 4.5rem 0;
    display: grid;
    grid-template-columns: 60% 5% 35%;
    grid-template-rows: 34% 44% 16%;
    grid-row-gap: 2%;
  }

  h2,
  h3 {
    font-family: "Lexend", sans-serif;
    font-size: 1.25rem;
    color: var(--grey-1);
  }

  .adImageContainer,
  .adDetailsContainer,
  .adDescription,
  .container3,
  .container4,
  .container5 {
    background-color: var(--grey-10);
    border-radius: var(--radius-4);
  }

  .adDetailsContainer,
  .adDescription,
  .container3,
  .container4,
  .container5 {
    padding: 2.25rem 2.75rem;
  }

  .container1 {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .adImageContainer {
    height: 22rem;
    display: flex;
    justify-content: center;
  }

  .adImageContainer > img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }

  .adDetailsContainer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .adDetails1 {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: space-between;
  }

  .adDetails1 > span {
    display: flex;
    gap: 0.75rem;
  }

  .adDetails1 > span > div {
    height: fit-content;
    color: var(--brand-1);
    background-color: var(--brand-3);
    border-radius: 4px;
    padding: 8px;
  }

  .adDetails1 > h3 {
    font-size: 1rem;
  }

  .container2 {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .adDescription {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .adDescription > p {
    min-height: 2rem;
  }

  .container3 {
    grid-area: 3 / 1 / 4 / 2;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
  }

  .container3 > span {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .container3 > form {
    width: 100%;
    height: 8rem;
    position: relative;
  }

  .container3 > form > textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border: 1.5px solid var(--grey-7);
    border-radius: var(--radius-4);
    color: var(--grey-3);
    font-size: 1rem;
    padding: 0.75rem 1rem;
    overflow-y: hidden;
    scroll-behavior: smooth;
    resize: none;
    outline: none;
  }

  .brandDarkButton {
    width: 150px;
    position: absolute;
    bottom: 0.8125rem;
    right: 0.6875rem;
  }

  .suggestionsButtons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .suggestionsButtons > button {
    background-color: var(--grey-7);
    color: var(--grey-3);
    border-radius: var(--radius-20);
    padding: 0 0.75rem;
    min-height: 1.5rem;
  }

  .container4 {
    grid-area: 1 / 3 / 2 / 4;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .container4 > ul {
    display: grid;
    align-content: space-between;
    justify-content: space-between;
    align-items: start;
    justify-items: center;
    grid-template-columns: repeat(3, minmax(6.75rem, 1fr));
    grid-gap: 0.875rem;
  }

  .container4 > ul > li {
    width: 6.75rem;
    height: 6.75rem;
    background-color: var(--grey-7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container4 > ul > li > img {
    width: 90%;
    object-fit: contain;
    object-position: center;
    cursor: pointer;
  }

  .container5 {
    grid-area: 2 / 3 / 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .sellerInitials {
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

  .sellerInitialsSmall {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: var(--radius-50);
    background-color: var(--random-1);
    color: var(--white);
    font-size: 0.9rem;
  }
`;
