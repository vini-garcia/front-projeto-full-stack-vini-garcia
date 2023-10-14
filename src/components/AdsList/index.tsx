import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import { AdCart } from "./AdCart";
import { StyledAdList } from "./style";

export const AdsListComponent = () => {
  const { ads } = useContext(CartContext);
  return (
    <StyledAdList>
      {ads.map((ad) => {
        return <AdCart key={ad.id} ad={ad} />;
      })} 
    </StyledAdList>
  )
};
