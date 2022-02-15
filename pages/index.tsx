import type { NextPage, GetStaticProps } from "next";
import {
    Container,
    VStack,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import RestaurantTable from "../components/restaurant-table";
import SelectWrapper from "../components/select-wrapper";
import PagenationButtonsWrapper from "../components/pagenation-buttons-wrapper";
import { useSearchState } from "../hooks/search";
import { usePagenation } from "../hooks/pagenation";
import { useSettings } from "../hooks/setting";
import { useStations } from "../hooks/station";
import { client } from "../cms";
import { TYPE_LIST, PREF_LIST, PER_PAGE_RESTAURANT_NUM } from "../utils";

const IndexPage: NextPage<IndexPageProps> = ({ restaurants }) => {

    const { searchState, selectType, selectPref } = useSearchState();
    const handleTypeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => selectType(e.currentTarget.value);
    const handlePrefSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => selectPref(e.currentTarget.value);

    const { stations, getStations, resetStations } = useStations();
    const handleSearchButtonClick = (lat: number, lon: number) => getStations(lat, lon, settings.weight);

    const { page, backPage, fowardPage, resetPage } = usePagenation(PER_PAGE_RESTAURANT_NUM, restaurants.length);

    useEffect(() => resetPage(), [searchState.type, searchState.pref]);

    const { settings } = useSettings();

    return (
        <VStack>
            <HStack w="50%" mb="3%">
                <SelectWrapper items={TYPE_LIST} selected={searchState.type} handleChange={handleTypeSelectChange} />
                <SelectWrapper items={PREF_LIST} selected={searchState.pref} handleChange={handlePrefSelectChange} />
            </HStack>
            <RestaurantTable restaurants={
                restaurants
                .filter(restaurant => restaurant.type.includes(searchState.type) && restaurant.address.includes(searchState.pref))
                .slice((page - 1) * PER_PAGE_RESTAURANT_NUM, (page - 1) * PER_PAGE_RESTAURANT_NUM + PER_PAGE_RESTAURANT_NUM)
            } handleSearchButtonClick={handleSearchButtonClick} />
            <PagenationButtonsWrapper handleBackPageButtonClick={backPage} handleFowardPageButtonClick={fowardPage} />
            <Modal isOpen={stations.length > 0} onClose={resetStations}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>駅候補</ModalHeader>
                    <ModalBody>
                        {stations.map(station => (
                            <HStack>
                                <Text>{station.name}</Text>
                                <Text>{`${station.oneline_distance}km`}</Text>
                                <Text>{`${station.burned_calorie}kcal`}</Text>
                            </HStack>   
                        ))}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </VStack>
    );

}

export const getStaticProps: GetStaticProps = async () => {

    const res = await client.get({
        endpoint: "restaurants", 
        queries: {
            fields: "id,name,type,address,lat,lon",
            limit: 1000
        }
    });

    return {
        props: {
            restaurants: res.contents.map(content => {
                return {
                    ...content,
                    /* 複数選択不可でも配列になる */
                    type: content.type[0]
                }
            })
        }
    }

}

export default IndexPage;