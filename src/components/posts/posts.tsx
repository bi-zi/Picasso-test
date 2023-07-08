import styles from "../style.module.scss";
import { Link } from "react-router-dom";
import { PostType, UserType } from "@/src/types";

interface PostsPropsType {
  posts: PostType[];
  users: UserType[];
}

export const Posts = ({ posts, users }: PostsPropsType) => {
  const findUser = (id: number) => {
    return users.find((user) => user.id === id);
  };

  return (
    <>
      <div className={styles.item}>
        <h2>{posts.length > 1 ? "Все посты" : "Пост"}</h2>

        {posts?.map((post) => (
          <Link
            to={`/User/${post.userId}/${post.id}`}
            key={post.id}
            className={styles.item__content}
          >
            <p>
              <span>Имя</span> - {findUser(post.userId)?.name}
            </p>

            <p>
              <span>Тема</span> - {post.title}
            </p>

            <p>
              <span>Текст</span> - {post.body}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};
