type UseSearchState = {
    searchState: SearchState;
    selectType: (type: string) => void;
    selectPref: (pref: string) => void;
}

type UsePagenation = {
    page: number;
    backPage: () => void;
    fowardPage: () => void;
    resetPage: () => void;
}

type UseStations = {
    stations: Station[];
    getStations: (lat: number, lon: number, weight: number) => void;
    resetStations: () => void;
}

type UseSettings = {
    settings: SettingState
    updateWeight: (weight: number) => void;
}