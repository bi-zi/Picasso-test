import styles from "./style.module.scss";
import { UserType } from "../../types/userTypes";

interface UserInfoPropsType {
	users: UserType[];
}

export const UserInfo = ({ users }: UserInfoPropsType) => {
	const user = users[0];

	return (
		<>
			{users.length === 1 && (
				<div className={styles.user}>
					<h1>Пользователь</h1>

					<div className={styles.user__info}>
						<ul>
							<p>Важная информация</p>

							<li>Имя - {user.name}</li>
							<li>Имя пользователя - {user.username}</li>
							<li>Почта - {user.email}</li>
							<li>Номер - {user.phone}</li>
							<li>Сайт - {user.website}</li>
						</ul>

						<ul>
							<p>Место проживания</p>

							<li>Город - {user.address.city}</li>
							<li>
								Координаты - ({user.address.geo.lat} | {user.address.geo.lng})
							</li>
							<li>Улица - {user.address.street}</li>
							<li>Номер дома - {user.address.suite}</li>
							<li>Почтовый индекс - {user.address.suite}</li>
						</ul>

						<ul>
							<p>Компания</p>

							<li>Название - {user.company.name}</li>
							<li>Описание - {user.company.catchPhrase}</li>
							<li>Направление - {user.company.bs}</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};
