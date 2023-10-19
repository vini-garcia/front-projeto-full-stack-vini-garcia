import logo from "../../assets/logo.png";
import { StyledHeader } from "./style";
import burguer_button from "../../assets/burguer_menu.svg";
import closebutton from "../../assets/x_button.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { Link } from "react-router-dom";

export function Header() {
  const { user, setIsEditAddressModalOpen, setIsEditUSerModalOpen, logout } =
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

  return (
    <>
      <StyledHeader>
        <div className="headerMenu">
          <img className="menuLogo" src={logo} alt="Motors Shop logo" />
          <img className="openMenuBtn menuButton" src={burguer_button} aria-label="Abrir Menu" />
          <img
            className="closeMenuBtn menuButton hidden"
            src={closebutton}
            aria-label="Fechar Menu"
          />
        </div>
        {!user ? (
          <nav className="headerNav hidden">
            <Link className="lightButton1" to="/login">
              Fazer Login
            </Link>
            <Link className="lightButton1" to="/signup">
              Cadastrar
            </Link>
          </nav>
        ) : (
          <nav className="headerNavLog">
            <span className="seller_info">
              <div>{nameSub(user?.name)}</div>
              <h4>{user?.name}</h4>
            </span>
            <section>
              <div onClick={() => setIsEditUSerModalOpen(true)}>
                <h1>Editar perfil</h1>
              </div>
              <div onClick={() => setIsEditAddressModalOpen(true)}>
                <h1>Editar endereço</h1>
              </div>
              {user?.type_of_account == "seller" ? (
                <div>
                  <Link to={`/announcements/user/${user.id}`}>Meus anúncios</Link>
                </div>
              ) : null}
              <div onClick={() => logout()}>
                <h1>Sair</h1>
              </div>
            </section>
          </nav>
        )}
      </StyledHeader>
    </>
  );
}
