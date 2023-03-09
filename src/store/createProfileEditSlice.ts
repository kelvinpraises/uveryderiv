import { immer } from "zustand/middleware/immer";

interface ProfileInput {
  handle: string;
  display_name: string;
  bio: string;
  avatar: string;
  cover_image: string;
  operator: string;
}

export type ProfileInputFields = keyof ProfileInput;

type State = {
  avatarFile: File | null;
  coverImageFile: File | null;

  input: ProfileInput;
};

type Actions = {
  setAvatar: (img: File) => void;
  setCoverImage: (img: File) => void;

  setInput: ({
    name,
    value,
  }: {
    name: ProfileInputFields;
    value: string;
  }) => void;
};

export default immer<State & Actions>((set, get) => ({
  avatarFile: null,
  coverImageFile: null,

  input: {
    handle: "",
    display_name: "",
    bio: "",
    avatar: "",
    cover_image: "",
    operator: "0x0000000000000000000000000000000000000000",
  },

  setAvatar: (img) =>
    set((state) => {
      state.avatarFile = img;
    }),
  setCoverImage: (img) =>
    set((state) => {
      state.coverImageFile = img;
    }),

  setInput: ({ name, value }) =>
    set((state) => {
      state.input[name] = value;
    }),
}));
