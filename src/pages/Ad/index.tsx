import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { CartContext, IAdResponse } from "../../providers/CartProvider";
import { UserIcon } from "../../components/Usericon";

export const AdPage = () => {
  const [ad, setAd] = useState<any>();
  const [comments, setComments] = useState<any>([]);

  const { getAd, getCommentsFromAd } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const getCurrentAd = async () => {
      const ad: any = await getAd(id);
      setAd(ad);

     
    };

    getCurrentAd();
  }, [getAd, id]);


  useEffect(() => {
    const getCurrentAdComments = async () => {
      const comments: any = await getCommentsFromAd(id);
      setComments(comments);

     
    };

    getCurrentAdComments();
  }, [getCommentsFromAd, id]);

  return (
    <>
      <Header />
      {ad == null ? (
        <h2>Carregando</h2>
      ) : (
        <main>
          <div></div>
          <section>
            <div>
              <img src={ad?.images[0].gallery_image_url} alt={ad?.model_car} />
            </div>
            <div>
              <h1>
                {ad?.car_brand} - {ad?.model_car}
              </h1>
              <div>
                <div>
                  <h6>{Number(ad?.mileage).toLocaleString("pt-br") + " km"}</h6>
                  <h6>{ad?.year_built}</h6>
                </div>
                <h2>
                  {Number(ad?.price).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h2>
              </div>
            </div>
            <div>
              <h2>Descrição</h2>
              <p>{ad?.description}</p>
            </div>
            <div>
              <h2>Comentários</h2>
              <ul>
                {comments.map((comment) => {
                  return (
                    <li key={comment.id}>
                      <UserIcon name={comment.user.name} />
                      <p>{comment.created_at}</p>
                      <p>{comment.comment}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section>
            <div>
              <h3>Fotos</h3>
              <ul>
                <li>Fotos</li>
              </ul>
            </div>
            <div>
              <UserIcon name={ad.user.name} />
              <h2>{ad.user.name}</h2>
              <p>{ad.user.description}</p>
              <Link to={`/announcements/user/${ad.user.id}`}>Ver todos os anúncios</Link>
            </div>
          </section>
        </main>
      )}

      <Footer />
    </>
  );
};
