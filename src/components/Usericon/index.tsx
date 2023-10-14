import { UserIconStyled } from "./style"

interface IName {
    name: string
}

export const UserIcon = ({name}: IName) => {
    return (
        <UserIconStyled className="card-ads-owner">
            <div className="card-ads-icon">{name[0].toUpperCase()}</div>
            <h3 className="card-ads-name" id="link">{name}</h3>
        </UserIconStyled>
    )
}