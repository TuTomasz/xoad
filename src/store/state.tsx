import { EnumType } from "typescript";
import create, { SetState, GetState } from "zustand";

// HOME STATE
type HomeState = {
  gameID: string;
  setGameID: (id: string) => void;
};

export const homePageStore = create<HomeState>((set, get) => ({
  gameID: "",
  setGameID: (id: string): void => {
    const { gameID } = get();
    set({ gameID: id });
  },
}));
