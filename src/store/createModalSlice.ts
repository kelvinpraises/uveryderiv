import { immer } from "zustand/middleware/immer";

type State = {
  openLogin: boolean;

  openProfileModal: boolean;
  profileModalSection: string;
};

type Actions = {
  setLoginModal: (open: boolean) => void;
  setProfileModal: (modalProps: {
    open?: boolean;
    modalSection?: string;
  }) => void;
};

export default immer<State & Actions>((set, get) => ({
  openLogin: false,

  openProfileModal: false,
  profileModalSection: "home",

  setLoginModal: (open) =>
    set((state) => {
      state.openLogin = open;
    }),

  setProfileModal: ({ open, modalSection }) =>
    set((state) => {
      state.openProfileModal =
        open !== undefined ? open : get().openProfileModal;
      state.profileModalSection = modalSection || "";
    }),
}));
