import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";
import { Main } from "../components";
import { CommentsType, PostType, UserType } from "../types";

interface MyParams {
	id: string;
	post: string;
}

export const Page = () => {
	const [comments, setComments] = useState<CommentsType[]>([]);
	const [posts, setPosts] = useState<PostType[]>([]);
	const [users, setUser] = useState<UserType[]>([]);

	const { id, post } = useParams<keyof MyParams>() as MyParams;

	const baseUrl =
		id === undefined && post === undefined
			? { users: "users", posts: "posts" }
			: post
			? { users: `users/${id}`, posts: `posts/${post}` }
			: { users: `users/${id}`, posts: `posts?userId=${id}` };

	// Загрузка данных постов и комментариев
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/${baseUrl.posts}`
				);

				const data = (await response.json()) as PostType;

				setPosts(Array.isArray(data) ? data : [data]);

				if (post) {
					const response = await fetch(
						`https://jsonplaceholder.typicode.com/${baseUrl.posts}/comments`
					);
					const data = (await response.json()) as CommentsType[];
					setComments(data);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData().catch(error => {
			console.error("Unhandled error:", error);
		});
	}, [baseUrl.posts, post]);

	// Загрузка данных пользователей
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/${baseUrl.users}`
				);
				const data = (await response.json()) as UserType;

				setUser(Array.isArray(data) ? data : [data]);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData().catch(error => {
			console.error("Unhandled error:", error);
		});
	}, [baseUrl.users]);

	return (
		<div className={styles.page}>
			<Main users={users} posts={posts} comments={comments} />
		</div>
	);
};
