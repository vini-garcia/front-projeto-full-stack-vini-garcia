import styled from 'styled-components';
import { AnimationFadeIn } from '../../../styles/animations';

export const StyledEditCommerceProfileModal = styled.div`
  display: flex;
  top: 0 !important;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  background: rgba(51, 51, 51, 0.5);
  box-shadow: 0px 9px 2px rgba(0, 0, 0, 0.25);

  .container_editProfile {
    animation: ${AnimationFadeIn} 1s ease 0s 1 alternate backwards;
    display: flex;
    flex-direction: column;
    width: 19.375rem;
    height: 100%;
    background-color: #ffffff;
    border-radius: 1.5rem 0rem 1.5rem 1.5rem;
    padding: 0 0.5rem;
  }

  .container_editProfile > nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5rem;
    background-color: #ffffff;
    gap: 1rem;
    padding-right: 0 0.5rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }

  .container_editProfile > nav > button {
    background-color: ${({ theme }) => theme.colors.orangePrimary};
    border: 1px solid ${({ theme }) => theme.colors.orangePrimary};
    border-radius: 6px;
    width: 1.75rem;
    height: 1.625rem;
    color: #ffffff;
  }

  div > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    background-color: #ffffff;
  }

  .container_editProfile > form > h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    width: 100%;
  }

  div > form > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    background: transparent;
  }

  div > form > div > label {
    background-color: ${({ theme }) => theme.colors.white};
    height: 2px;
    position: absolute;
    padding: 3px;
    top: -0.3125rem;
    left: 1.25rem;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: #000000;
    transition: top 0.5s, left 0.3s ease-out;
  }

  div > form > div > input {
    height: 45px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    color: #989898;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    padding: 0 0 0 14px;

    ::placeholder {
      height: 45px;
      color: ${({ theme }) => theme.colors.gray150};
    }

    :focus {
      border: 1px solid ${({ theme }) => theme.colors.gray300};
      color: #000000;
      padding-left: 14px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  div > form > div > p {
    height: 1rem;
    margin: 0;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.greenPrimary};
  }

  div > form > button {
    width: 90%;
    height: 45px;
    background-color: #056365;
    border: 1px solid #056365;
    border-radius: 0.9rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0;
    margin-bottom: 1rem;
  }

  .container_editProfile > button {
    width: 90%;
    height: 45px;
    align-self: center;
    margin-bottom: 2rem;
    background-color: #71cb9f;
    border: 1px solid #71cb9f;
    border-radius: 0.9rem;
    color: #056365;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;
