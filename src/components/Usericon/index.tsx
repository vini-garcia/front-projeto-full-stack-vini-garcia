import { UserIconStyled } from "./style";

interface IName {
  name: string;
}

export const UserIcon = ({ name }: IName) => {
  const surname: string = name.split(" ")[1];

  return (
    <UserIconStyled>
      <div>
        {name[0].toUpperCase()}
        {surname[0].toUpperCase()}
      </div>
      <h3>{name}</h3>
    </UserIconStyled>
  );
};
