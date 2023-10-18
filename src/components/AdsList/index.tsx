import { IAd } from "../../providers/CartProvider";
import { AdCart } from "./AdCart";
import { StyledAdList } from "./style";

export interface IAdCart {
  ads: IAd[];
}

export const AdsListComponent = ({ ads }: IAdCart) => {
  return (
    <StyledAdList>
      {ads.map((ad) => {
        return <AdCart key={ad.id} ad={ad} />;
      })}
    </StyledAdList>
  );
};
