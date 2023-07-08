import { Link, useNavigate } from "react-router-dom";
import { UserType } from "../../types/userTypes";
import styles from "./style.module.scss";
import { ChangeEvent } from "react";

interface SelectPropsType {
  users: UserType[];
}

export const Select = ({ users }: SelectPropsType) => {
  const navigate = useNavigate();
  const handleClick = (e: ChangeEvent<HTMLSelectElement>) =>
    navigate(`/User/${e.target.value}`);

  return (
    <>
      {users.length > 1 ? (
        <select className={styles.select} onChange={(e) => handleClick(e)}>
          <option defaultValue={"select"}>Выберите пользователя</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      ) : (
        <Link to="/" className={styles.select}>
          Вернуться на главную
        </Link>
      )}
    </>
  );
};
