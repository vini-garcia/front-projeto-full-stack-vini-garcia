import { useContext } from "react";
import { CartContext, IAd } from "../../../providers/CartProvider";
import { StyledCart } from "./style";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { Link } from "react-router-dom";

export interface IAdCart {
  ad: IAd;
}

export const AdCart = ({ ad }: IAdCart) => {
  const { user } = useContext(UserContext);
  const { setIsEditAdModalOpen, setCurrentAd } = useContext(CartContext);

  const handleButton = () => {
    setIsEditAdModalOpen(true);
    setCurrentAd(ad);
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
    <StyledCart>
      <div className="image_container">
        <img src={ad.images[0].gallery_image_url} alt={ad.model_car} />
      </div>
      <div className="ad_info_container">
        <h2 className="ad_title">
          {ad.car_brand} - {ad.model_car}
        </h2>
        <p className="ad_description">{ad.description.substring(0, 60)}...</p>
        <span className="seller_info">
          <div>{nameSub(ad.user.name!)}</div>
          <h4>{ad.user.name}</h4>
        </span>
        <div className="ad_extra_info_container">
          <div>
            <div>
              <h6>{Number(ad.mileage).toLocaleString("pt-br") + " km"}</h6>
              <h6>{ad.year_built}</h6>
            </div>
            <h2>
              {Number(ad.price).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h2>
          </div>
        </div>
      </div>
      <div>
        {ad.user.id == user?.id ? <button onClick={() => handleButton()}>Editar</button> : null}
        <Link to={`/announcements/${ad.id}`}>Ver detalhes</Link>
      </div>
    </StyledCart>
  );
};
