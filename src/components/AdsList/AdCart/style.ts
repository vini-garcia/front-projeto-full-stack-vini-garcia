import styled from "styled-components";

export const StyledCart = styled.li`
  width: 19.5rem;
  height: 21.875rem;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .image_container > img {
    width: 320px;
    height: 152px;
    object-fit: cover;
    border-radius: 6px;
  }

  .ad_info_container {
    padding-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .ad_title {
    color: var(--grey-1);
    line-height: 20px;
  }

  .ad_description {
    color: var(--grey-2);
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

  .ad_extra_info_container {
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
`;
