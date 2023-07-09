import { ReactNode, useEffect, useState } from "react";

import styles from "./style.module.scss";
import useStore from "../../store/useStore";

interface NotificationPropsType {
	children: ReactNode;
}

export const Notification = ({ children }: NotificationPropsType) => {
	const notification = useStore(state => state.notification);

	const [show, setShow] = useState(false);

	useEffect(() => {
		if (notification === "") return;
		setShow(true);

		const timer1 = setTimeout(() => {
			setShow(false);
		}, 5000);

		return () => {
			clearTimeout(timer1);
		};
	}, [notification]);

	return (
		<div>
			{show && <div className={styles.noti}>{notification}</div>}
			{children}
		</div>
	);
};
