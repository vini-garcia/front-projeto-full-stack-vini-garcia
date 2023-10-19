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
  const { isCreateAdModalOpen, setIsCreateAdModalOpen, isEditAdModalOpen, isDeleteAdModalOpen } =
    useContext(CartContext);
  const {
    isSuccessModalOpen,
    isEditUSerModalOpen,
    isEditAddressModalOpen,
    isDeleteAccountModalOpen,
    user,
  } = useContext(UserContext);

  const [currentAds, setCurrentAds] = useState<IAd[]>([]);

  async function getUserAds() {
    try {
      const { data } = await api.get<IAd[]>(`/announcements/user/${id}`);
      setCurrentAds(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserAds();
  });

  const currentAd = currentAds[0];

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
      <StyledMain>
        {user == null ? (
          <h2>Carregando</h2>
        ) : (
          <section>
            <div></div>
            {currentAd == null ? (
              <section>
                <span className="seller_info">
                  <div>{nameSub(user?.name)}</div>
                  <h4>{user?.name}</h4>
                </span>
                <div>
                  <h2>{user?.name}</h2>
                  <span>{user?.type_of_account}</span>
                </div>
                <p>{user.description}</p>
                {user.type_of_account == "seller" ? (
                  <button
                    onClick={() => {
                      setIsCreateAdModalOpen(true);
                    }}
                  >
                    Criar anúncio
                  </button>
                ) : null}
              </section>
            ) : (
              <section>
                <span className="seller_info">
                  <div>{nameSub(currentAd.user?.name)}</div>
                  <h4>{currentAd.user?.name}</h4>
                </span>
                <div>
                  <h2>{currentAd.user?.name}</h2>
                  <span>Anunciante</span>
                </div>
                <p>{currentAd.user.description}</p>
                {currentAd.user.id == user?.id ? (
                  <button
                    onClick={() => {
                      setIsCreateAdModalOpen(true);
                    }}
                  >
                    Criar anúncio
                  </button>
                ) : null}
              </section>
            )}
          </section>
        )}
        {currentAd == null ? (
          <h2>Nenhum anúncio a ser mostrado</h2>
        ) : (
          <section>
            {currentAds.length == 0 ? (
              <h2>Nenhum anúncio a ser mostrado</h2>
            ) : (
              <AdsListComponent ads={currentAds} />
            )}
          </section>
        )}
      </StyledMain>
      <Footer />
    </>
  );
};
