import { useRecoilState } from "recoil";
import { settingState } from "../atoms/setting";

export const useSettings = (): UseSettings => {

    const [settings, setSettings] = useRecoilState(settingState);

    const updateWeight = (weight: number) => setSettings(prev_settings => {
        return {
            ...prev_settings,
            weight: isNaN(weight) ? prev_settings.weight : weight
        }
    });

    return { settings, updateWeight }

}