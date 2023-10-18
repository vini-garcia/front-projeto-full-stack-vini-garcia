import styled from "styled-components";
import blueCar from "../../assets/blue_car.png";

export const StyledSectionBackGround = styled.section`
  width: 100%;
  height: 544px;

  display: flex;
  flex-direction: column;

  background-image: url(${blueCar});
  background-repeat: no-repeat;
  background-position: center;
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%); */
`;

export const StyledSectionAds = styled.section`
  width: 100%;
  height: 900px;
`;
