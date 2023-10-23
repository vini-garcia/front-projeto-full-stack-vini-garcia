import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { useState } from "react";
import { TLoginFormSchema } from "../../components/Form/LoginForm/loginFormSchema";
import {
  TEditUpdate,
  TEditUser,
  TRegister,
  editSchemaRequest,
} from "../../components/Form/RegisterUserForm/registerUserFormSchema";

interface UserProviderProps {
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  dob: string;
  description: string;
  type_of_account: string;
  password: string;
}

interface IUserWithAddress {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  dob: string;
  description: string;
  type_of_account: string;
  password: string;
  address: {
    id: string;
    post_code: string;
    state: string;
    city: string;
    street_name: string;
    street_number: string;
    address_complement: string;
  };
}

interface UserProviderValues {
  signIn: (data: TLoginFormSchema) => void;
  registerSubmit: (formData: TRegister) => void;
  logout: () => void;
  user: IUserWithAddress | null | undefined;
  setIsSuccessModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessModalOpen: boolean;
  editUser: (formData: TEditUser) => Promise<void>;
  isEditUSerModalOpen: boolean;
  setIsEditUSerModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditAddressModalOpen: boolean;
  setIsDeleteAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleteAccountModalOpen: boolean;
  deleteAccount: (id: string) => Promise<void>;
  getUser: () => Promise<void>;
}

export const UserContext = createContext<UserProviderValues>({} as UserProviderValues);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<IUserWithAddress | null | undefined>();

  const navigate = useNavigate();
  const token = localStorage.getItem("@token");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isEditUSerModalOpen, setIsEditUSerModalOpen] = useState(false);
  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);

  async function signIn(formData: TLoginFormSchema) {
    try {
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@token", response.data.token);
      await getUser();
      navigate("/");

      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  async function getUser() {
    try {
      const userFound = await api.get<IUserWithAddress>(`users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(userFound.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  async function registerSubmit(formData: TRegister) {
    try {
      await api.post<IUser>("/users", formData);
      setIsSuccessModalOpen(true);
      // setTimeout(() => {
      //   navigate("/login");
      // }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
  UserContext;

  async function editUser(formData: Partial<TEditUpdate>) {
    if (formData.name == "") {
      delete formData.name;
    }
    if (formData.email == "") {
      delete formData.email;
    }
    if (formData.cpf == "") {
      delete formData.cpf;
    }
    if (formData.phone_number == "") {
      delete formData.phone_number;
    }
    if (formData.description == "") {
      delete formData.description;
    }
    if (formData.dob == "") {
      delete formData.dob;
    }
    if (formData.address?.post_code == "") {
      delete formData.address?.post_code;
    }
    if (formData.address?.state == "") {
      delete formData.address?.state;
    }
    if (formData.address?.city == "") {
      delete formData.address?.city;
    }
    if (formData.address?.street_name == "") {
      delete formData.address?.street_name;
    }
    if (formData.address?.street_number == "") {
      delete formData.address?.street_number;
    }
    if (formData.address?.address_complement == "") {
      delete formData.address?.address_complement;
    }

    try {
      await api.patch(`/users/${user?.id}`, editSchemaRequest.parse(formData), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsEditUSerModalOpen(false);
      setIsEditAddressModalOpen(false);
      // setIsSuccessModalOpen(true);
      // setTimeout(() => {
      //   navigate("/login");
      // }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteAccount = async (id: string) => {
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsDeleteAccountModalOpen(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  function logout() {
    const keysToRemove = ["@token"];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    setUser(null);

    setTimeout(() => {
      navigate("/login");
      location.reload();
    }, 1000);
  }

  return (
    <UserContext.Provider
      value={{
        signIn,
        user,
        registerSubmit,
        logout,
        setIsSuccessModalOpen,
        isSuccessModalOpen,
        editUser,
        setIsEditUSerModalOpen,
        isEditUSerModalOpen,
        setIsEditAddressModalOpen,
        isEditAddressModalOpen,
        setIsDeleteAccountModalOpen,
        isDeleteAccountModalOpen,
        deleteAccount,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
