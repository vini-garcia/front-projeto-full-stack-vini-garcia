import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { CartContext, IAd, IComment } from "../../providers/CartProvider";
import { StyledMain } from "./style";
import { ImageModal } from "../../components/Modais/OpenImage";

export const AdPage = () => {
  const [ad, setAd] = useState<IAd>();
  const [comments, setComments] = useState<IComment[]>([]);

  const { getAd, getCommentsFromAd, isImageModalOpen, setIsImageModalOpen, setCurrentImage } =
    useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const getCurrentAd = async () => {
      const ad: IAd | undefined = await getAd(id!);
      setAd(ad);
    };

    getCurrentAd();
  }, [getAd, id]);

  useEffect(() => {
    const getCurrentAdComments = async () => {
      const comments = await getCommentsFromAd(id!);

      setComments(comments!);
    };

    getCurrentAdComments();
  }, [getCommentsFromAd, id]);

  const handleButton = (urlIMage: string) => {
    setIsImageModalOpen(true);
    setCurrentImage(urlIMage);
  };

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
      {isImageModalOpen ? <ImageModal /> : null}
      {ad == null ? (
        <h2>Carregando</h2>
      ) : (
        <StyledMain>
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
                      <span className="seller_info">
                        <div>{nameSub(comment.user.name!)}</div>
                        <h4>{comment.user.name}</h4>
                      </span>
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
                {ad.images.map((image) => {
                  return (
                    <li key={image.id} onClick={() => handleButton(image.gallery_image_url)}>
                      <img src={image.gallery_image_url} alt="Imagem veículo" />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <span className="seller_info">
                {/* <div>{initialsLetters}</div> */}
                <h4>{ad.user.name}</h4>
              </span>
              <h2>{ad?.user.name}</h2>
              <p>{ad?.user.description}</p>
              <Link to={`/announcements/user/${ad.user.id}`}>Ver todos os anúncios</Link>
            </div>
          </section>
        </StyledMain>
      )}

      <Footer />
    </>
  );
};
