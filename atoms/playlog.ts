import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const initPlayLogState = {
    play_num: 0,
    clear_num: 0,
    current_streak: 0,
    max_streak: 0
}

export const playLogState = atom<PlayLogState>({
    key: "playlog",
    default: initPlayLogState,
    effects_UNSTABLE: [persistAtom]
})