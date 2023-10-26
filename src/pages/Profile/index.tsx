import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { AdsListComponent } from "../../components/AdsList";
import { CartContext } from "../../providers/CartProvider";
import { CreateAdModal } from "../../components/Modais/CreateAd";
import { SuccessModal } from "../../components/Modais/Success";
import { UserContext } from "../../providers/UserContext/UserContext";
import { EditUserModal } from "../../components/Modais/EditUser";
import { EditAddressModal } from "../../components/Modais/EditAddress";
import { EditAdModal } from "../../components/Modais/EditAd";
import { DeleteAdModal } from "../../components/Modais/DeleteAd";
import { DeleteAccountModal } from "../../components/Modais/DeleteUser";
import { StyledMain } from "./style";
import { FormButton } from "../../components/Buttons";

export const Profile = () => {
  const { id } = useParams();
  const {
    isCreateAdModalOpen,
    setIsCreateAdModalOpen,
    isEditAdModalOpen,
    isDeleteAdModalOpen,
    currentAds,
    getUserAds,
  } = useContext(CartContext);
  const {
    isSuccessModalOpen,
    isEditUSerModalOpen,
    isEditAddressModalOpen,
    isDeleteAccountModalOpen,
    user,
  } = useContext(UserContext);

  useEffect(() => {
    getUserAds(id!);
  }, []);

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
            {currentAd == null ? (
              <section className="profileHeader">
                <div className="initialsLetters">{nameSub(user?.name)}</div>
                <span>
                  <h2>{user?.name}</h2>
                  <div>{user?.type_of_account}</div>
                </span>
                <p>{user.description}</p>
                {user.type_of_account == "seller" ? (
                  <div
                    onClick={() => {
                      setIsCreateAdModalOpen(true);
                    }}
                  >
                    <FormButton
                      type="submit"
                      customClass="brandLightButton fitButton"
                      text="Criar anúncios"
                    />
                  </div>
                ) : null}
              </section>
            ) : (
              <section className="profileHeader">
                <div className="initialsLetters">{nameSub(currentAd.user?.name)}</div>
                <span>
                  <h2>{currentAd.user?.name}</h2>
                  <span>Anunciante</span>
                </span>
                <p>{currentAd.user.description}</p>
                {currentAd.user.id == user?.id ? (
                  <div
                    onClick={() => {
                      setIsCreateAdModalOpen(true);
                    }}
                  >
                    <FormButton
                      type="submit"
                      customClass="brandLightButton fitButton"
                      text="Criar anúncios"
                    />
                  </div>
                ) : null}
              </section>
            )}
          </section>
        )}
        {currentAd == null ? (
          <h2>Nenhum anúncio a ser mostrado</h2>
        ) : (
          <section className="adsContainer">
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
