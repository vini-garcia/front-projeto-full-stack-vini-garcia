import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export interface ICartProviderProps {
  children: React.ReactNode;
}

export interface IAdRequest {
  car_brand: string;
  model_car: string;
  fipe_price: number;
  price: number;
  year_built: number;
  mileage: number;
  description: string;
  color: string;
  type_of_fuel: string;
  images: {		
		cover_image_url: string;
		gallery_image_url: string[];
	}
}

export interface IAdResponse extends IAdRequest {
  id: string;
  user: {
    id: string;
    name: string;
    email: string
    phone_number: string;
    dob: string;
    description: string
  };

}

interface IAdContext {
  ads: IAdResponse[];
}

export const CartContext = createContext({} as IAdContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [ads, setAds] = useState<IAdResponse[]>([]);

  async function loadAds() {
    try {
      const { data } = await api.get<IAdResponse[]>("/announcements/");
      setAds(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <CartContext.Provider
      value={{
        ads,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
