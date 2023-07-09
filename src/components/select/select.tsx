import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./style.module.scss";
import useStore from "../../store/useStore";

import { UserType } from "@/src/types";

interface SelectPropsType {
	users: UserType[];
}

export const Select = ({ users }: SelectPropsType) => {
	const setNotification = useStore(state => state.setNotification);

	const navigate = useNavigate();
	const handleClick = (e: ChangeEvent<HTMLSelectElement>) => {
		const name = users.find(user => user.id === +e.target.value)?.name;

		setNotification(`Переход к пользователю ${name!}`);

		navigate(`/User/${e.target.value}`);
	};

	return (
		<>
			{users.length > 1 ? (
				<select className={styles.select} onChange={e => handleClick(e)}>
					<option defaultValue={"select"}>Выберите пользователя</option>
					{users.map(user => (
						<option value={user.id} key={user.id}>
							{user.name}
						</option>
					))}
				</select>
			) : (
				<Link
					to="/"
					className={styles.select}
					onClick={() => setNotification(`Переход на главную`)}
				>
					Вернуться на главную
				</Link>
			)}
		</>
	);
};
