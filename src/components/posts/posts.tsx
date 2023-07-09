import { Link } from "react-router-dom";

import useStore from "../../store/useStore";
import styles from "../style.module.scss";

import { PostType, UserType } from "@/src/types";

interface PostsPropsType {
	posts: PostType[];
	users: UserType[];
}

export const Posts = ({ posts, users }: PostsPropsType) => {
	const setNotification = useStore(state => state.setNotification);

	const findUser = (id: number) => {
		return users.find(user => user.id === id);
	};

	return (
		<>
			<div className={styles.item}>
				<h2>{posts.length > 1 ? "Все посты" : "Пост"}</h2>

				{posts?.map((post, index) => (
					<Link
						to={`/User/${post.userId}/${post.id}`}
						key={index}
						className={styles.item__content}
						onClick={() =>
							posts.length > 1 &&
							setNotification(`Переход к посту ${index + 1}`)
						}
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
