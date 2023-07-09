import { useEffect, useState } from "react";

import useStore from "../../store/useStore";
import styles from "../style.module.scss";

import { CommentsType } from "@/src/types";

interface CommentsPropsType {
	comments: CommentsType[] | undefined;
	postsLength: number;
}

export const Comments = ({ comments, postsLength }: CommentsPropsType) => {
	const setNotification = useStore(state => state.setNotification);

	const [commentList, setCommentList] = useState(comments || []);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [body, setBody] = useState("");

	const addComment = async (event: React.FormEvent) => {
		event.preventDefault();

		setNotification("Вы отправили комментарий");

		await fetch(
			`https://jsonplaceholder.typicode.com/comments?postId=${commentList[0].postId}`,
			{
				method: "POST",
				body: JSON.stringify({
					name,
					email,
					body,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}
		)
			.then(response => response.json())
			.then(json => {
				setCommentList([...commentList, json]);
				setName("");
				setEmail("");
				setBody("");
			});
	};

	useEffect(() => {
		setCommentList(comments!);
	}, [comments]);

	return (
		<>
			{commentList.length > 0 && postsLength === 1 && (
				<div className={styles.item}>
					<h3>Комментарии</h3>

					<form onSubmit={addComment}>
						Оставить комментарий
						<fieldset>
							<input
								type="text"
								placeholder="Имя"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Почта"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Текст"
								value={body}
								onChange={e => setBody(e.target.value)}
							/>

							<button type="submit">Отправить</button>
						</fieldset>
					</form>

					{commentList.map(comment => (
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
