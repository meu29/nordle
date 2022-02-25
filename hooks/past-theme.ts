import { useRecoilState } from "recoil";
import { pastThemeState } from "../atoms/past-theme";

export const usePastThemes = (): UsePastThemes => {

    const [past_themes, setPastThemes] = useRecoilState(pastThemeState);

    const addPastTheme = (theme: WordleTheme) => setPastThemes(prev_past_themes => {
        return {
            ...prev_past_themes,
            [theme.id]: theme
        }
    });

    const deletePastTheme = (id: string) => setPastThemes(prev_past_themes => {
        const {[id]: WordleTheme, ...others} = prev_past_themes;
        return others;
    });

    return {
        past_themes,
        addPastTheme,
        deletePastTheme,
    }

}