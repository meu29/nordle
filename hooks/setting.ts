import { useRecoilState } from "recoil";
import { settingState } from "../atoms/setting";

export const useSettings = (): UseSettings => {

    const [settings, setSettings] = useRecoilState(settingState);

    const updatePref = (pref: string) => setSettings((prev_settings) => {
        return {
            ...prev_settings,
            pref: pref
        }
    });

    return {
        settings,
        updatePref
    }

}