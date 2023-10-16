import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { UserIcon } from "../../components/Usericon";
import { AdsListComponent } from "../../components/AdsList";
import { api } from "../../services/api";
import { IAdResponse } from "../../providers/CartProvider";

export const Profile = () => {
  const { id } = useParams();

  const [ads, setAds] = useState<IAdResponse[]>([]);

  async function getUserAds() {
    try {
      const { data } = await api.get<IAdResponse[]>(`/announcements/user/${id}`);
      setAds(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserAds();
  });

  const ad = ads[0];

  return (
    <>
      <Header />
      <main>
        <section>
          <div></div>
          <div>{ad == null ? <h2>Carregando</h2> : <UserIcon name={ad.user.name} />}</div>
          <div>
            {ad == null ? <h2>Carregando</h2> : <h2>{ad.user.name}</h2>}
            {ad == null ? <h2>Carregando</h2> : <span>{ad.user.type_of_account}</span>}
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
