import { useRecoilState } from "recoil";
import { playLogState, initPlayLogState } from "../atoms/playlog";

export const usePlayLog = (): UsePlayLogs => {

    const [ playlog, setPlayLog ] = useRecoilState(playLogState);

    const updatePlayLog = (cleared: boolean) => setPlayLog((prev_playlog) => {

        let clear_num = prev_playlog.clear_num;
        let current_streak = prev_playlog.current_streak;

        if (cleared === true) {
            clear_num += 1;
            current_streak += 1;
        } else {
            current_streak = 0;
        }

        let max_streak = prev_playlog.max_streak;

        if (prev_playlog.max_streak > current_streak) {
            max_streak = current_streak;
        } 
        
        return {
            play_num: prev_playlog.play_num + 1,
            clear_num: clear_num,
            current_streak: current_streak,
            max_streak: max_streak 
        }

    });

    return {
        playlog,
        updatePlayLog
    }

}