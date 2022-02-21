import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const settingState = atom<SettingState>({
    key: "settings",
    default: {
        pref: "東京都"
    },
    effects_UNSTABLE: [persistAtom]
})