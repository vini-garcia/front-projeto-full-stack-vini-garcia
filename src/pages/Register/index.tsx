import { useContext } from "react";
import Footer from "../../components/Footer";
import { RegisterUserForm } from "../../components/Form/RegisterUserForm";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { SuccessModal } from "../../components/Modais/Success";
import { UserContext } from "../../providers/UserContext/UserContext";

export const Register = () => {
  const { isSuccessModalOpen } = useContext(UserContext);
  return (
    <>
      <Header />
      {isSuccessModalOpen ? (
        <SuccessModal link={"/login"} text={"Sua conta foi criada com sucesso!"} />
      ) : null}
      <StyledMain>
        <RegisterUserForm />
      </StyledMain>
      <Footer />
    </>
  );
};
