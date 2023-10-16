import styled from 'styled-components';

export const StyledCreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.greenPrimary};
  border-radius: 1rem;
  gap: 1.25rem;
  margin-bottom: 1rem;

  .header_formCreate {
    margin: 1rem 0 0.5rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.375rem;
  }

  .header_formCreate > h1 {
    line-height: 2.25rem;
    display: flex;
    font-weight: 700;
    color: #2e2e2e;
  }

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  .input_formCreateOffer {
    width: auto;
    height: 45px;
    border: 2px solid #989898;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray600};
    font-size: 0.875rem;
    font-weight: 400;
    padding-left: 14px;

    ::placeholder {
      height: 45px;
      color: ${({ theme }) => theme.colors.gray150};
    }

    :focus {
      background-color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.gray300};
      color: #000000;
      padding-left: 14px;
    }
  }

  div > p {
    height: 1rem;
    margin-left: 0.5rem;
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.greenPrimary};
  }

  button {
    height: 2.8125rem;
    width: 90%;
    border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;

    :hover {
      background: #71cb9f;
      border: 1px solid #71cb9f;
    }
  }

  @media (min-width: 768px) {
    header > h1 {
      font-size: 1.5rem;
    }

    div > div > label {
      background: transparent !important;
    }
  }
`;
