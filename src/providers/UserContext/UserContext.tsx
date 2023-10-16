import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { useState } from "react";
import { TLoginFormSchema } from "../../components/Form/LoginForm/loginFormSchema";
import { TRegister } from "../../components/Form/RegisterUserForm/registerUserFormSchema";

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

interface UserProviderValues {
  signIn: (data: TLoginFormSchema) => void;
  registerSubmit: (formData: TRegister) => void;
  logout: () => void;
  user: IUser | null;
}

export const UserContext = createContext<UserProviderValues>({} as UserProviderValues);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState(null as IUser | null);
  const navigate = useNavigate();

  async function signIn(formData: TLoginFormSchema) {
    try {
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@token", response.data.token);
      await getUser(response.data.token);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  const getUser = async (token: string) => {
    const userFound = await api.get(`users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(userFound.data);
  };

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
        user,
        registerSubmit,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
