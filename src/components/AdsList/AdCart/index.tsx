import { useContext } from "react";
import { CartContext, IAd } from "../../../providers/CartProvider";
import { StyledCart } from "./style";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { FormButton } from "../../Buttons";

export interface IAdCart {
  ad: IAd;
}

export const AdCart = ({ ad }: IAdCart) => {
  const navigate = useNavigate();
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

  const handleGoToAd = (id: string) => {
    navigate(`/announcements/${id}`);
  };

  return (
    <StyledCart>
      <div onClick={() => handleGoToAd(ad.id)} className="image_container">
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
      <div className="buttonsContainer">
        {ad.user.id == user?.id ? (
          <div className="editButton" onClick={() => handleButton()}>
            <FormButton type="button" customClass="brandLightButton fitButton" text="Editar" />
          </div>
        ) : null}
        <div
          className="detailsButton"
          onClick={() => {
            navigate(`/announcements/${ad.id}`);
          }}
        >
          <FormButton type="button" customClass="brandLightButton fitButton" text="Ver detalhes" />
        </div>
      </div>
    </StyledCart>
  );
};
