import { useState } from "react";

export const useStations = (): UseStations => {

    const [stations, setStations] = useState<Station[]>([]);

    const getStations = async (lat: number, lon: number, weight: number) => {
        try {
            const data = await (await fetch(`/api/stations?lat=${lat}&lon=${lon}&weight=${weight}`)).json();
            setStations(() => data.stations);
        } catch (err) {
            console.log(err);
        }
    }

    const resetStations = () => setStations(() => []);

    return { stations, getStations, resetStations }

}