import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { AdsListComponent } from "../../components/AdsList";
import { MainBanner, StyledSectionAds, StyledSectionBackGround } from "./styled";
import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import { EditAdModal } from "../../components/Modais/EditAd";
import { DeleteAdModal } from "../../components/Modais/DeleteAd";
import { EditUserModal } from "../../components/Modais/EditUser";
import { EditAddressModal } from "../../components/Modais/EditAddress";
import { UserContext } from "../../providers/UserContext/UserContext";

export const HomePage = () => {
  const { ads, isEditAdModalOpen, isDeleteAdModalOpen } = useContext(CartContext);
  const { isEditAddressModalOpen, isEditUSerModalOpen } = useContext(UserContext);

  return (
    <>
      <Header />
      {isEditAdModalOpen ? <EditAdModal /> : null}
      {isDeleteAdModalOpen ? <DeleteAdModal /> : null}
      {isEditUSerModalOpen ? <EditUserModal /> : null}
      {isEditAddressModalOpen ? <EditAddressModal /> : null}
      <main>
        <StyledSectionBackGround className="main__announcement">
          <MainBanner className="linear_gradient">
            <h4>Motors Shop</h4>
            <h2>A melhor plataforma de anúncios de carros do país</h2>
          </MainBanner>
        </StyledSectionBackGround>
        <StyledSectionAds>
          <AdsListComponent ads={ads} />
        </StyledSectionAds>
      </main>
      <Footer />
    </>
  );
};
