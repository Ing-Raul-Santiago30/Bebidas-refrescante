import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoriteSlice";

type Notifacation = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceType = {
  notificacion: Notifacation;
  showNotification: (payload: Pick<Notifacation, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType & FavoritesSliceType,
  [],
  [],
  NotificationSliceType
> = (set, get) => ({
  notificacion: {
    text: "",
    error: false,
    show: false,
  },
  showNotification: (payload) => {
    set({
      notificacion: {
        text: payload.text,
        error: payload.error,
        show: true,
      }
    })
    setTimeout(()=>{
    get().hideNotification()
    },3000);
  },
  hideNotification: () => {
    set({
      notificacion: {
        text: "",
        error: false,
        show: false,
      },
    });
  },
});
