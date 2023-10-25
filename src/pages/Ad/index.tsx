import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext, useEffect } from "react";
import { CartContext } from "../../providers/CartProvider";
import { StyledMain } from "./style";
import { ImageModal } from "../../components/Modais/OpenImage";
import { EditAddressModal } from "../../components/Modais/EditAddress";
import { EditUserModal } from "../../components/Modais/EditUser";
import { UserContext } from "../../providers/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CommentList } from "../../components/CommentList";
import { FormButton } from "../../components/Buttons";

export const CommentFormSchema = z.object({
  comment: z.string().min(1, "Não é possível comentários em branco. Digite algo."),
});

export type TComment = {
  comment: string;
};
export type TCommentFormSchema = z.infer<typeof CommentFormSchema>;

export const AdPage = () => {
  const { isEditAddressModalOpen, isEditUSerModalOpen, user } = useContext(UserContext);
  const {
    isImageModalOpen,
    setIsImageModalOpen,
    setCurrentImage,
    getCommentsFromAd,
    comments,
    getAd,
    ad,
    createNewComment,
  } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    getAd(id!);
  }, []);

  useEffect(() => {
    getCommentsFromAd(id!);
  }, []);

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

  const onSubmitFunction = (data: TComment) => {
    reset();
    createNewComment(data, ad!.id);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCommentFormSchema>({
    resolver: zodResolver(CommentFormSchema),
  });

  return (
    <>
      <Header />
      {isImageModalOpen ? <ImageModal /> : null}
      {isEditUSerModalOpen ? <EditUserModal /> : null}
      {isEditAddressModalOpen ? <EditAddressModal /> : null}

      {ad == null || comments === null ? (
        <h2>Carregando</h2>
      ) : (
        <StyledMain>
          <section className="mainContainer">
            <section className="container1">
              <div className="adImageContainer">
                <img src={ad?.images[0].gallery_image_url} alt={ad?.model_car} />
              </div>
              <div className="adDetailsContainer">
                <h2>
                  {ad?.car_brand} - {ad?.model_car}
                </h2>
                <div className="adDetails1">
                  <span>
                    <div>{Number(ad?.mileage).toLocaleString("pt-br") + " km"}</div>
                    <div>{ad?.year_built}</div>
                  </span>
                  <h3>
                    {Number(ad?.price).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h3>
                </div>
                {/* <span className="adDetails2">
                  <div className="brandLightContainers">
                    Tabela FIPE:{" "}
                    {Number(ad?.fipe_price).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                  <div className="brandLightContainers">{ad?.type_of_fuel}</div>
                </span> */}
              </div>
            </section>
            <section className="container2">
              <div className="adDescription">
                <h2>Descrição</h2>
                <p>{ad?.description}</p>
              </div>
              <CommentList />
            </section>
            <section className="container3">
              <span className="userInfo">
                <div className="sellerInitialsSmall">{nameSub(user!.name)}</div>
                <h4>{user!.name}</h4>
              </span>
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <textarea
                  placeholder="Digitar comentário"
                  id="comment"
                  {...register("comment")}
                ></textarea>
                {errors ? <p>{errors.comment?.message}</p> : null}
                <FormButton type="submit" customClass="brandDarkButton fitButton" text="Comentar" />
              </form>
              <span className="suggestionsButtons">
                <button
                // onClick={() => handlePresetMessage("Gostei muito!")}
                >
                  Gostei muito!
                </button>
                <button
                // onClick={() => handlePresetMessage("Incrível")}
                >
                  Incrível
                </button>
                <button
                // onClick={() => handlePresetMessage("Recomendarei para meus amigos")}
                >
                  Recomendarei para meus amigos
                </button>
              </span>
            </section>
            <section className="container4">
              <h2>Fotos</h2>
              <ul>
                {ad.images.map((image) => {
                  return (
                    <li key={image.id} onClick={() => handleButton(image.gallery_image_url)}>
                      <img src={image.gallery_image_url} alt="Imagem veículo" />
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="container5">
              <div className="sellerInitials">{nameSub(ad.user.name!)}</div>
              <h2>{ad?.user.name}</h2>
              <p>{ad?.user.description}</p>
              <Link to={`/announcements/user/${ad.user.id}`}>Ver todos os anúncios</Link>
            </section>
          </section>
        </StyledMain>
      )}
      <Footer />
    </>
  );
};
