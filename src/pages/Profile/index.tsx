import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { AdsListComponent } from "../../components/AdsList";
import { api } from "../../services/api";
import { CartContext, IAd } from "../../providers/CartProvider";
import { CreateAdModal } from "../../components/Modais/CreateAd";
import { SuccessModal } from "../../components/Modais/Success";
import { UserContext } from "../../providers/UserContext/UserContext";
import { EditUserModal } from "../../components/Modais/EditUser";
import { EditAddressModal } from "../../components/Modais/EditAddress";
import { EditAdModal } from "../../components/Modais/EditAd";
import { DeleteAdModal } from "../../components/Modais/DeleteAd";
import { DeleteAccountModal } from "../../components/Modais/DeleteUser";
import { StyledMain } from "./style";

export const Profile = () => {
  const { id } = useParams();
  const { isCreateAdModalOpen, isEditAdModalOpen, isDeleteAdModalOpen } = useContext(CartContext);
  const {
    isSuccessModalOpen,
    isEditUSerModalOpen,
    isEditAddressModalOpen,
    isDeleteAccountModalOpen,
  } = useContext(UserContext);

  const [ads, setAds] = useState<IAd[]>([]);
  async function getUserAds() {
    try {
      const { data } = await api.get<IAd[]>(`/announcements/user/${id}`);
      setAds(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserAds();
  });

  const ad = ads[0];

  const nameSub = (nameSurname: string) => {
    return nameSurname
      .split(" ")
      .map((letter: string, index: number) => {
        if (index === 0 || index === nameSurname.split(" ").length - 1) {
          return letter[0].toUpperCase();
        }
      })
      .join("");
  };

  return (
    <>
      <Header />
      {isCreateAdModalOpen ? <CreateAdModal /> : null}
      {isEditUSerModalOpen ? <EditUserModal /> : null}
      {isEditAdModalOpen ? <EditAdModal /> : null}
      {isDeleteAdModalOpen ? <DeleteAdModal /> : null}
      {isEditAddressModalOpen ? <EditAddressModal /> : null}
      {isDeleteAccountModalOpen ? <DeleteAccountModal /> : null}
      {isSuccessModalOpen ? (
        <SuccessModal link={"null"} text={"Seu anúncio foi criado com sucesso!"} />
      ) : null}
      {ad == null ? (
        <h2>Carregando</h2>
      ) : (
        <StyledMain>
          <section>
            <div></div>
            <span className="seller_info">
              <div>{nameSub(ad.user.name!)}</div>
              <h4>{ad.user.name}</h4>
            </span>
            <div>
              <h2>{ad.user.name}</h2>
              <span>Anunciante</span>
            </div>
            <div>{ad.user.description}</div>
          </section>
          <section>
            {ads.length == 0 ? (
              <h2>Nenhum anúncio a ser mostrado</h2>
            ) : (
              <AdsListComponent ads={ads} />
            )}
          </section>
        </StyledMain>
      )}

      <Footer />
    </>
  );
};
