import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const pastThemeState = atom<PastWordleThemeState>({
    key: "past-themes",
    default: {},
    effects_UNSTABLE: [persistAtom]
});