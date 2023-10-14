import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { useState } from "react";
import { z } from "zod";
import { loginSchema } from "../../pages/Login/schemas";
import { TRegister } from "../../pages/Register/schemas";

interface UserProviderProps {
  children: React.ReactNode;
}

export type TLogin = z.infer<typeof loginSchema>;

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

interface UserProviderValues {
  signIn: (data: TLogin) => void;
  registerSubmit: (formData: TRegister) => void;
  logout: () => void;
}

export const UserContext = createContext<UserProviderValues>({} as UserProviderValues);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState(null as IUser | null);
  
  const navigate = useNavigate();

  async function signIn(formData: TLogin) {
    try {
      const response = await api.post("/login", formData);
      const token: string = response.data.token;
      setUser(response.data.user);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@token", response.data.token);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  async function registerSubmit(formData: TRegister) {
    try {
      await api.post("/users", formData);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    const keysToRemove = ["@token"];
    keysToRemove.forEach((key) => localStorage.removeItem(key));

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  return (
    <UserContext.Provider
      value={{
        signIn,
        registerSubmit,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
