import { StateCreator } from "zustand";

export interface NotificationStore {
	notification: string;

	setNotification: (str: string) => void;
}

export const createNotificationSlice: StateCreator<
	NotificationStore
> = set => ({
	notification: "",

	setNotification: (str: string) => set(() => ({ notification: str })),
});
