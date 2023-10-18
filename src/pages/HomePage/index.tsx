import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { AdsListComponent } from "../../components/AdsList";
import { StyledSectionAds, StyledSectionBackGround } from "./styled";
import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";

export const HomePage = () => {
  const { ads } = useContext(CartContext);
  return (
    <>
      <Header />
      <main>
        <StyledSectionBackGround>
          <div>
            <h4>Motors Shop</h4>
            <h2>A melhor plataforma de anúncios de carros do país</h2>
          </div>
        </StyledSectionBackGround>
        <StyledSectionAds>
          <AdsListComponent ads={ads} />
        </StyledSectionAds>
      </main>
      <Footer />
    </>
  );
};
