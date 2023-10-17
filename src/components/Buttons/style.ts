import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: var(--radius-4);
  font-weight: 600;

  .linkButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: none;
    text-decoration: none;
    color: inherit;
  }
  .linkButton:hover {
    background-color: none;
    text-decoration: none;
  }

  &.smallButton {
    height: 2.375rem;
    font-size: 0.875rem;
    padding: 0 1.25rem;
  }

  &.largeButton {
    height: 3rem;
    font-size: 1rem;
    padding: 0 1.75rem;
  }

  &.brandDarkButton {
    background-color: var(--brand-1);
    border: 1.5px solid var(--brand-1);
    color: var(--white);
  }
  &.brandDarkButton:hover {
    background-color: var(--brand-2);
    border: 1.5px solid var(--brand-2);
  }
  &.brandDarkButton:focus-within {
    background-color: var(--brand-4);
    border: 1.5px solid var(--brand-4);
    color: var(--brand-1);
  }
  &.brandDarkButton:disabled {
    background-color: var(--brand-3);
    border: 1.5px solid var(--brand-3);
    cursor: default;
  }

  &.brandLightButton {
    background-color: inherit;
    border: 1.5px solid var(--brand-1);
    color: var(--brand-1);
  }
  &.brandLightButton:hover {
    background-color: var(--brand-4);
  }
  &.brandLightButton:active {
    background-color: var(--brand-1);
    border: 1.5px solid var(--brand-1);
    color: var(--white);
  }

  &.lightButton1,
  &.lightButton2 {
    background-color: inherit;
    border: 1.5px solid var(--grey-4);
    color: var(--grey-0);
  }
  &.lightButton1:hover,
  &.lightButton2:hover {
    background-color: var(--grey-5);
    border: 1.5px solid var(--grey-5);
    color: var(--grey-2);
  }
  &.lightButton1:active,
  &.lightButton2:active {
    background-color: var(--grey-1);
    border: 1.5px solid var(--grey-1);
    color: var(--grey-10);
  }

  &.lightButton2 {
    background-color: inherit;
    border: 1.5px solid var(--grey-0);
    color: var(--grey-0);
  }

  &.darkButton {
    background-color: var(--grey-1);
    border: 1.5px solid var(--grey-1);
    color: var(--grey-10);
  }
  &.darkButton:hover {
    background-color: inherit;
    border: 1.5px solid var(--grey-0);
    color: var(--grey-0);
  }
  &.darkButton:active {
    background-color: var(--grey-5);
    border: 1.5px solid var(--grey-5);
    color: var(--grey-2);
  }
`;
