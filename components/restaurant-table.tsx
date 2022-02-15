import { useMemo } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    TableCaption,
} from "@chakra-ui/react";
import {
    SearchIcon
} from "@chakra-ui/icons";

const RestaurantTable: React.VFC<RestaurantTableProps> = ({ restaurants, handleSearchButtonClick }) => {

    return useMemo(() => (
        <Table w="80%">
            <Thead>
                <Tr>
                    <Th>店舗名</Th>
                    <Th>種別</Th>
                    <Th>住所</Th>
                    <Th>駅を検索</Th>
                </Tr>
            </Thead>
            <Tbody>
                {restaurants.map(restaurant => (
                    <Tr key={restaurant.id}>
                        <Td>{restaurant.name}</Td>
                        <Td>{restaurant.type}</Td>
                        <Td>{restaurant.address}</Td>
                        <Td>
                            <IconButton icon={<SearchIcon />} aria-label="search" onClick={() => handleSearchButtonClick(restaurant.lat, restaurant.lon)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
            <TableCaption>{restaurants.length === 0 ? "条件に一致する店舗が見つかりませんでした": ""}</TableCaption>
        </Table>
    ), [JSON.stringify(restaurants)]);

}

export default RestaurantTable;