import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { UserContext } from "../UserContext/UserContext";
import { TAdEdit } from "../../components/Modais/EditAd/editAdSchema";

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
  id: string | null | undefined;
  comment: string | null | undefined;
  created_at: string | null | undefined;
  announcements: {
    id: string | null | undefined;
  };
  user: {
    id: string | null | undefined;
    name: string | null | undefined;
  };
}

interface IAdContext {
  ads: IAdResponse[];
  currentAd: IAdResponse | undefined;
  setCurrentAd: React.Dispatch<React.SetStateAction<IAdResponse | undefined>>;
  deleteAd: (id: string) => Promise<void>;
  editAd: (data: Partial<TAdEdit>, id: string) => Promise<void>;
  getAd: (id: string) => Promise<IAdResponse | undefined>;
  getCommentsFromAd: (id: string) => Promise<IComment[] | undefined>;
  setIsCreateAdModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateAdModalOpen: boolean;
  createNewAd: (payload: IAdRequest) => Promise<IAdResponse | undefined>;
  setIsEditAdModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditAdModalOpen: boolean;
  setIsDeleteAdModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleteAdModalOpen: boolean;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isImageModalOpen: boolean;
  setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  currentImage: string | undefined;
}

export const CartContext = createContext({} as IAdContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [ads, setAds] = useState<IAdResponse[]>([]);
  const [currentAd, setCurrentAd] = useState<IAdResponse>();
  const [isCreateAdModalOpen, setIsCreateAdModalOpen] = useState(false);
  const [isEditAdModalOpen, setIsEditAdModalOpen] = useState(false);
  const [isDeleteAdModalOpen, setIsDeleteAdModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const token = localStorage.getItem("@token");
  const { setIsSuccessModalOpen } = useContext(UserContext);
  const [currentImage, setCurrentImage] = useState<string>();

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
  });

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
      setIsCreateAdModalOpen(false);
      setIsSuccessModalOpen(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const editAd = async (data: Partial<TAdEdit>, id: string) => {
    if (data.car_brand == "") {
      delete data.car_brand;
    }
    if (data.model_car == "") {
      delete data.model_car;
    }
    if (data.year_built == 0) {
      delete data.year_built;
    }
    if (data.type_of_fuel == "") {
      delete data.type_of_fuel;
    }
    if (data.mileage == 0) {
      delete data.mileage;
    }
    if (data.color == "") {
      delete data.color;
    }
    if (data.fipe_price == 0) {
      delete data.fipe_price;
    }
    if (data.price == 0) {
      delete data.price;
    }
    if (data.description == "") {
      delete data.description;
    }
    if (data.images?.gallery_image_url == "") {
      delete data.images;
    }
    try {
      await api.patch(`/announcements/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsEditAdModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAd = async (id: string) => {
    try {
      await api.delete(`/announcements/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsDeleteAdModalOpen(false);
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
        editAd,
        setIsCreateAdModalOpen,
        isCreateAdModalOpen,
        createNewAd,
        setIsEditAdModalOpen,
        isEditAdModalOpen,
        setCurrentAd,
        currentAd,
        setIsDeleteAdModalOpen,
        isDeleteAdModalOpen,
        setIsImageModalOpen,
        isImageModalOpen,
        setCurrentImage,
        currentImage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
