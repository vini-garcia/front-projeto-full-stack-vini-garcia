import logo from "../../assets/logo.png";
import { StyledHeader } from "./style";
import burguer_button from "../../assets/burguer_menu.svg";
import closebutton from "../../assets/x_button.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { FormButton } from "../Buttons";

export function Header() {
  const [hiddenUserMenu, setHiddenUserMenu] = useState("hidden");
  const [hiddenNavbar, setHiddenNavbar] = useState("hidden");
  const [activeMenuButton, setActiveMenuButton] = useState("openMenu");
  const navigate = useNavigate();
  const { user, setIsEditAddressModalOpen, setIsEditUSerModalOpen, getUser, logout } =
    useContext(UserContext);

  const nameSub = (nameSurname: string) => {
    return nameSurname
      .split(" ")
      .map((letter: string, index: number) => {
        if (index === 0 || index === nameSurname.split(" ").length - 1) {
          return letter[0].toUpperCase();
        }
      })
      .join("");
  };

  const toggle = () => {
    if (activeMenuButton === "openMenu") {
      setActiveMenuButton("closeMenu");
      setHiddenNavbar("");
    } else {
      setActiveMenuButton("openMenu");
      setHiddenNavbar("hidden");
    }
  };

  const goToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <StyledHeader>
        <div className="headerMenu">
          <img
            onClick={() => {
              goToHomePage();
            }}
            className="menuLogo"
            src={logo}
            alt="Motors Shop logo"
          />
          <img
            className={`menuButton ${activeMenuButton}`}
            src={activeMenuButton === "openMenu" ? burguer_button : closebutton}
            aria-label={activeMenuButton === "openMenu" ? "Abrir Menu" : "Fechar Menu"}
            onClick={toggle}
          />
        </div>
        {!user ? (
          <nav className="headerNav hidden">
            <FormButton type="button" text="Login" customClass="brandLightButton" />
            <FormButton type="button" text="Cadastrar" customClass="lightButton2" />
          </nav>
        ) : (
          <nav className="headerNav">
            <span
              className="userInfo"
              style={{ cursor: "pointer" }}
              onClick={() =>
                hiddenUserMenu === "hidden" ? setHiddenUserMenu("") : setHiddenUserMenu("hidden")
              }
            >
              <div>{nameSub(user?.name)}</div>
              <h4>{user?.name}</h4>
            </span>
            <div className={`${hiddenUserMenu} userMenu`}>
              <span onClick={() => setIsEditUSerModalOpen(true)}>Editar perfil</span>
              <span onClick={() => setIsEditAddressModalOpen(true)}>Editar endereço</span>
              {user?.type_of_account == "seller" ? (
                <span onClick={() => navigate(`/announcements/user/${user?.id}`)}>
                  Meus anúncios
                </span>
              ) : null}
              <span onClick={() => logout()}>Sair</span>
            </div>
          </nav>
        )}
        <div className={`headerAfter ${hiddenNavbar}`}></div>
      </StyledHeader>
    </>
  );
}
