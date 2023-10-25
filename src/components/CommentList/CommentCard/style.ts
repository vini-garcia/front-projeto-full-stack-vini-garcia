import styled from "styled-components";

export const StyledCommentCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.875rem;
  gap: 0.75rem;
  color: var(--grey-2);
  background-color: inherit;

  .commentMainContainer {
    display: flex;
    align-items: center;
    color: var(--grey-1);
    gap: 0.625rem;
  }

  .commentMainContainer > small {
    font-size: 0.75rem;
    color: var(--grey-3);
  }

  .commentText {
    text-align: justify;
  }

  .userInitials {
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
