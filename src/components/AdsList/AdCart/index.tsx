// import { Link, Navigate } from "react-router-dom";
import { UserIcon } from "../../Usericon";
import { StyledCart } from "./style";

export const AdCart = ({ ad }: any) => {
  return (
    <StyledCart>
      <div className="image">
        <img src={ad.images[0].gallery_image_url} alt={ad.model_car} />
      </div>
      <h2 className="card-title">{ad.car_brand} - {ad.model_car}</h2>
      <p className="card-description">{ad.description}</p>
      <UserIcon name={ad.user.name} />
      <div className="card-bottom">
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

        {/* {user?.id && (
          <div className="buttonsCard">
            <button
              onClick={() => {
                // setModalIsOpen(true);
              }}
            >
              Editar
            </button>

            <div onClick={() => Navigate(`/announcements/${ad.id}`)}>
              <button>Ver detalhes</button>
            </div>
          </div>
        )} */}
      </div>

      {/* <Button text={"Editar"} type={"button"} classType="buttonDeleteAds"/> */}
    </StyledCart>

    // <StyledCart>
    //   <div>
    //     <img src={ad.images[0].gallery_image_url} alt="" />
    //     <div>
    //       <h1>{ad.model_car}</h1>
    //       <p>{ad.description}</p>
    //     </div>
    //     <div>
    //       <h1>{ad.user.name}</h1>
    //     </div>
    //     <div>
    //       <div>
    //         <p>{ad.mileage}</p>
    //         <p>{ad.year_built}</p>
    //       </div>
    //       <div>
    //         <h3>{ad.price}</h3>
    //       </div>
    //     </div>
    //   </div>
    // </StyledCart>
  );
};
