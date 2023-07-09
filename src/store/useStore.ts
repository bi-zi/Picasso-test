import { create } from "zustand";

import {
	createNotificationSlice,
	NotificationStore,
} from "./notificationSlice";

const useStore = create<NotificationStore>()((...data) => ({
	...createNotificationSlice(...data),
}));

export default useStore;
