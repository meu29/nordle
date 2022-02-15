type IndexPageProps = {
    restaurants: Restaurant[];
}

type SelectWrapperProps = {
    items: string[];
    selected: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

type PagenationButtonsWrapperProps = {
    handleBackPageButtonClick: () => void;
    handleFowardPageButtonClick: () => void;
}

type RestaurantTableProps = {
    restaurants: Restaurant[];
    handleSearchButtonClick: (lat: number, lon: number) => void;
}
