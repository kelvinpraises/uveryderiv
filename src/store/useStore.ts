import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createSlice from "./createSlice";

type StateFromFunctions<T extends [...any]> = T extends [infer F, ...infer R]
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

type State = StateFromFunctions<[typeof createSlice]>;

export const useStore = create<State>()(
  devtools(
    (set, get, store) => ({
      ...createSlice(set, get, store),
    }),
    { name: "uveryderiv" }
  )
);
