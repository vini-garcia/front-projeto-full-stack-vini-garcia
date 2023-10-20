import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { UserContext } from "../UserContext/UserContext";
import { TAdEdit } from "../../components/Modais/EditAd/editAdSchema";
import { TComment } from "../../pages/Ad";

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
    gallery_image_url?: string[] | string | null | undefined | never[];
    gallery_image_url2?: string | null;
    gallery_image_url1?: string | null;
    gallery_image_url3?: string | null;
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
  ad: IAd | undefined;
  setAd: React.Dispatch<React.SetStateAction<IAd | undefined>>;
  currentAd: IAdResponse | undefined;
  setCurrentAd: React.Dispatch<React.SetStateAction<IAdResponse | undefined>>;
  deleteAd: (id: string) => Promise<void>;
  editAd: (data: Partial<TAdEdit>, id: string) => Promise<void>;
  getAd: (id: string) => Promise<void>;
  getCommentsFromAd: (id: string) => Promise<void>;
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
  setCurrentAds: React.Dispatch<React.SetStateAction<IAd[]>>;
  currentAds: IAd[];
  getUserAds: (id: string) => Promise<void>;
  setComments: React.Dispatch<React.SetStateAction<IComment[] | null | undefined>>;
  comments: IComment[] | null | undefined;
  createNewComment: (payload: TComment, id: string) => Promise<void>;
}

export const CartContext = createContext({} as IAdContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [ads, setAds] = useState<IAdResponse[]>([]);
  const [ad, setAd] = useState<IAd>();
  const [currentAd, setCurrentAd] = useState<IAdResponse>();
  const [isCreateAdModalOpen, setIsCreateAdModalOpen] = useState(false);
  const [isEditAdModalOpen, setIsEditAdModalOpen] = useState(false);
  const [isDeleteAdModalOpen, setIsDeleteAdModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const token = localStorage.getItem("@token");
  const { setIsSuccessModalOpen } = useContext(UserContext);
  const [currentImage, setCurrentImage] = useState<string>();
  const [currentAds, setCurrentAds] = useState<IAd[]>([]);
  const [comments, setComments] = useState<IComment[] | undefined | null>([]);

  const getUserAds = async (id: string) => {
    try {
      const { data } = await api.get<IAd[]>(`/announcements/user/${id}`);
      setCurrentAds(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function loadAds() {
      try {
        const { data } = await api.get<IAdResponse[]>("/announcements/");
        setAds(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadAds();
  }, []);

  const getAd = async (id: string) => {
    try {
      const { data } = await api.get<IAdResponse>(`/announcements/${id}`);
      setAd(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCommentsFromAd = async (id: string) => {
    try {
      const { data } = await api.get<IComment[]>(`/comments/${id}`);
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  const createNewAd = async (payload: IAdRequest) => {
    const imagesList: string[] | null = [];
    if (payload.images.gallery_image_url1 != "") {
      imagesList.push(payload.images.gallery_image_url1!);
    }
    if (payload.images.gallery_image_url2 != "") {
      imagesList.push(payload.images.gallery_image_url2!);
    }
    if (payload.images.gallery_image_url3 != "") {
      imagesList.push(payload.images.gallery_image_url3!)!;
    }
    payload.images.gallery_image_url = imagesList;
    delete payload.images.gallery_image_url1;
    delete payload.images.gallery_image_url2;
    delete payload.images.gallery_image_url3;

    try {
      const { data } = await api.post<IAdResponse>("/announcements/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await getUserAds(data.user.id);
      const ads = await api.get<IAd[]>(`/announcements/user/${data.user.id}`);
      setCurrentAds(ads.data);
      setIsCreateAdModalOpen(false);
      setIsSuccessModalOpen(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const editAd = async (payload: Partial<IAdRequest>, id: string) => {
    if (payload.car_brand == "") {
      delete payload.car_brand;
    }
    if (payload.model_car == "") {
      delete payload.model_car;
    }
    if (payload.year_built == 0) {
      delete payload.year_built;
    }
    if (payload.type_of_fuel == "") {
      delete payload.type_of_fuel;
    }
    if (payload.mileage == 0) {
      delete payload.mileage;
    }
    if (payload.color == "") {
      delete payload.color;
    }
    if (payload.fipe_price == 0) {
      delete payload.fipe_price;
    }
    if (payload.price == 0) {
      delete payload.price;
    }
    if (payload.description == "") {
      delete payload.description;
    }
    if (payload.images?.gallery_image_url1 == "") {
      delete payload.images;
    }
    if (payload.images?.gallery_image_url1) {
      const imagesList: string[] | null = [];
      if (payload.images!.gallery_image_url1 != "") {
        imagesList.push(payload.images!.gallery_image_url1!);
      }
      if (payload.images!.gallery_image_url2 != "") {
        imagesList.push(payload.images!.gallery_image_url2!);
      }
      if (payload.images!.gallery_image_url3 != "") {
        imagesList.push(payload.images!.gallery_image_url3!);
      }
      payload.images!.gallery_image_url = imagesList;
      delete payload.images!.gallery_image_url1;
      delete payload.images!.gallery_image_url2;
      delete payload.images!.gallery_image_url3;

      payload.images;
    }

    try {
      await api.patch(`/announcements/${id}`, payload, {
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

  const createNewComment = async (payload: TComment, id: string) => {
    try {
      const { data } = await api.post(`/comments/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await getCommentsFromAd(data.announcements.id);
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
        setCurrentAds,
        currentAds,
        getUserAds,
        setAd,
        ad,
        setComments,
        comments,
        createNewComment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
