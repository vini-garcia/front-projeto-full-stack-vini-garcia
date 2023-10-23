import styled from "styled-components";
import blueCar from "../../assets/blue_car.png";

export const StyledSectionBackGround = styled.section`
  width: 100%;
  height: 650px;

  &.main__announcement {
    background-image: url(${blueCar});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const MainBanner = styled.div`
  display: flex;
  align-items: center;

  h4 {
    color: white;
    font-size: 30px;
  }

  h2 {
    color: white;
    font-size: 25px;
  }

  &.linear_gradient {
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding-top: 150px;
    gap: 10px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  }
`;

export const StyledSectionAds = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px 100px;
`;
