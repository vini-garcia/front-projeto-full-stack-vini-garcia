import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import LoginForm from "../../components/Form/LoginForm";
import { StyledMain } from "./styled";

export const LoginPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <LoginForm />
      </StyledMain>
      <Footer />
    </>
  );
};
