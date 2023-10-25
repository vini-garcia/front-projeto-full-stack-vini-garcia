import { IComment } from "../../../providers/CartProvider";
import { StyledCommentCard } from "./style";

export interface ICommentCart {
  comment: IComment;
}

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

export function CommentCard({ comment }: ICommentCart) {
  return (
    <StyledCommentCard>
      <span className="commentMainContainer">
        <div className="userInitials">{nameSub(comment.user.name!)}</div>
        <h4>{comment.user.name}</h4>
        <small>{comment.created_at}</small>
      </span>
      <div className="commentText">{comment.comment}</div>
    </StyledCommentCard>
  );
}
