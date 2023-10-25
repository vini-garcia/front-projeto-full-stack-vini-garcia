import styled from "styled-components";

export const StyledCommentList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  background-color: var(--grey-10);
  border-radius: var(--radius-4);
  padding: 2.25rem 2.75rem;

  .commentULContainer {
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
  }
`;
