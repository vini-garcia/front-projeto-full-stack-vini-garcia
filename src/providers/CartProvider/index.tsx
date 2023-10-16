import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export interface ICartProviderProps {
  children: React.ReactNode;
}

export interface IAd {
  id: string;
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
    id: string;
    cover_image_url: string;
    gallery_image_url: string;
  }[];
  comments: {
    id: string;
    comment: string;
  }[];
  user: {
    id: string;
    name: string;
    cpf: string;
    description: string;
    dob: string;
    email: string;
    password: string;
    phone_number: string;
    type_of_account: string;
  };
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
  };
}

export interface IAdResponse extends IAdRequest {
  id: string;
  user: {
    type_of_account: string;
    id: string;
    name: string;
    email: string;
    phone_number: string;
    dob: string;
    description: string;
  };
}

interface IAdContext {
  ads: IAdResponse[];
  deleteAd: (id: string) => Promise<void>;
  getAd: (id: string) => Promise<IAdResponse | undefined>;
  getCommentsFromAd: (id: string) => Promise<any | undefined>;
}

export const CartContext = createContext({} as IAdContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [ads, setAds] = useState<IAdResponse[]>([]);

  async function loadAds() {
    try {
      const { data } = await api.get<IAdResponse[]>("/announcements/");
      setAds(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadAds();
  }, []);

  const getAd = async (id: string) => {
    try {
      const { data } = await api.get<IAdResponse>(`/announcements/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getCommentsFromAd = async (id: string) => {
    try {
      const { data } = await api.get<any>(`/comments/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // const createNewAd = async (newData: IAdResponse) => {
  //   try {
  //     const { data } = await api.post<IAdResponse | undefined>("/announcements/", newData);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const editAd = async (data: Partial<IAdResponse>, id: string) => {
  //   try {
  //     await api.patch(`/announcements/${id}`, data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const deleteAd = async (id: string) => {
    try {
      await api.delete(`/announcements/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        ads,
        deleteAd,
        getAd,
        getCommentsFromAd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
