import styled from "styled-components";

export const StyledCart = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 320px;
  height: max-content;
  border-radius: 6px;

  .image_container > img {
    width: 320px;
    height: 152px;
    object-fit: cover;
    border-radius: 6px;
  }

  .ad_title {
    color: var(--grey-1);
    line-height: 20px;
  }

  .ad_description {
    color: var(--grey-2);
  }

  .user_container {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
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
  }

  &:hover {
    cursor: pointer;
  }
`;
