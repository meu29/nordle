import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const settingState = atom<SettingState>({
    key: "settings",
    default: {
        weight: 60
    },
    effects_UNSTABLE: [persistAtom]
})