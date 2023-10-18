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

export const Profile = () => {
  const { id } = useParams();
  const { isCreateAdModalOpen, isEditAdModalOpen } = useContext(CartContext);
  const { isSuccessModalOpen, isEditUSerModalOpen, setIsEditUSerModalOpen, setIsEditAddressModalOpen, isEditAddressModalOpen } = useContext(UserContext);



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

  // const splitName = ad?.user.name.split(" ");
  // const initialsLetters = `${splitName[0][0]}${splitName[splitName.length - 1][0]}`;

  return (
    <>
      <Header />
      {isCreateAdModalOpen ? <CreateAdModal /> : null}
      {isEditUSerModalOpen ? <EditUserModal /> : null}
      {isEditAdModalOpen ? <EditAdModal /> : null}
      {isEditAddressModalOpen ? <EditAddressModal /> : null}
      {isSuccessModalOpen ? <SuccessModal link={"null"} text={"Seu anúncio foi criado com sucesso!"} /> : null}
      <main>
        <section>
          <div></div>
          <span className="seller_info">
            {/* <div>{initialsLetters}</div> */}
            {ad == null ? <h2>Carregando</h2> : <h4>{ad.user.name}</h4>}
          </span>
          <div>
            {ad == null ? <h2>Carregando</h2> : <h2>{ad.user.name}</h2>}
            {ad == null ? <h2>Carregando</h2> : <span>Anunciante</span>}
          </div>
          {ad == null ? <h2>Carregando</h2> : <div>{ad.user.description}</div>}
        </section>
        <section>
          {ads.length == 0 ? (
            <h2>Nenhum anúncio a ser mostrado</h2>
          ) : (
            <AdsListComponent ads={ads} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};
