import { CommentsType } from "@/src/types";
import styles from "../style.module.scss";

interface CommentsPropsType {
  comments: CommentsType[] | undefined;
}

export const Comments = ({ comments }: CommentsPropsType) => {
  if (!comments) return;

  return (
    <>
      {comments?.length > 0 && (
        <div className={styles.item}>
          <h3>Комментарии</h3>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.item__content}>
              <p>
                <span>Имя</span> - {comment.name}
              </p>
              <p>
                <span>Почта</span> - {comment.email}
              </p>
              <p>
                <span>Текст</span> - {comment.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
