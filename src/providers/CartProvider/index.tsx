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
    created_at: string;
  }[];
  user: {
    id: string;
    name: string;
    description: string;
    dob: string;
    email: string;
    phone_number: string;
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
    cover_image_url?: string | null | undefined | never[];
    gallery_image_url?: string | null | undefined | never[];
  };
}

export interface IAdResponse {
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
    created_at: string;
  }[];
  user: {
    id: string;
    name: string;
    description: string;
    dob: string;
    email: string;
    phone_number: string;
  };
}

export interface IComment {
  id: string;
  comment: string;
  created_at: string;
  announcements: {
    id: string;
  };
  user: {
    id: string;
    name: string;
  };
}

interface IAdContext {
  ads: IAd[];
  deleteAd: (id: string) => Promise<void>;
  getAd: (id: string) => Promise<IAdResponse | undefined>;
  getCommentsFromAd: (id: string) => Promise<IComment[] | undefined>;
  setIsCreateAdModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateAdModalOpen: boolean;
  createNewAd: (payload: IAdRequest) => Promise<IAdResponse | undefined>;
}

export const CartContext = createContext({} as IAdContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [ads, setAds] = useState<IAdResponse[]>([]);
  const [isCreateAdModalOpen, setIsCreateAdModalOpen] = useState(true);
  const token = localStorage.getItem("@token");

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
      const { data } = await api.get<IComment[]>(`/comments/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const createNewAd = async (payload: IAdRequest) => {
    if (payload.images) {
      payload.images.gallery_image_url = [];
    }
    try {
      const { data } = await api.post<IAdResponse>("/announcements/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };

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
        setIsCreateAdModalOpen,
        isCreateAdModalOpen,
        createNewAd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
