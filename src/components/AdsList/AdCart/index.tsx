import { useContext } from "react";
import { IAd } from "../../../providers/CartProvider";
import { UserIcon } from "../../Usericon";
import { StyledCart } from "./style";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { Link } from "react-router-dom";

export interface IAdCart {
  ad: IAd;
}

export const AdCart = ({ ad }: IAdCart) => {
  const { user } = useContext(UserContext);

  return (
    <StyledCart>
      <div className="image_container">
        <img src={ad.images[0].gallery_image_url} alt={ad.model_car} />
      </div>
      <h2 className="ad_title">
        {ad.car_brand} - {ad.model_car}
      </h2>
      <p className="ad_description">{ad.description}</p>
      <UserIcon name={ad.user.name} />
      <div className="user_container">
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
      <div>
        {ad.user.id == user?.id ? <button>Editar</button> : null}
        <Link to={`/announcements/${ad.id}`}>Ver detalhes</Link>
      </div>
    </StyledCart>
  );
};
