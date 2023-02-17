import { immer } from "zustand/middleware/immer";

type State = {};

type Actions = {};

export default immer<State & Actions>((set, get) => ({}));
