import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import { StyledCommentList } from "./style";
import { CommentCard } from "./CommentCard";

export function CommentList() {
  const { comments } = useContext(CartContext);
  return (
    <StyledCommentList>
      <h2>Comentários</h2>
      {comments == null ? (
        <p>Sem comentários</p>
      ) : (
        <ul className="commentULContainer">
          {comments.map((comment) => {
            return <CommentCard key={comment.id} comment={comment} />;
          })}
        </ul>
      )}
    </StyledCommentList>
  );
}
