import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import { Container, Select, Button } from "@chakra-ui/react";
import { PREF_CODES } from "../utils";

const fetcher = async (url: string) => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

const RestaurantPage: NextPage = () => {

    const router = useRouter();
    const handleBackButtonClick = () => router.push("/");

    const [ pref_code, setPrefCode ] = useState<string>("");
    const handlePrefSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setPrefCode(e.currentTarget.value);

    const { data, error } = useSWR(`/api/restaurants?keyword=${router.query.keyword}&pref_code=${pref_code}`, fetcher); 

    return (
        <Container>
            <Select value={pref_code} onChange={handlePrefSelectChange}>
                <option value="">指定なし</option>
                {Object.keys(PREF_CODES).map(pref => 
                    <option value={PREF_CODES[pref]}>{pref}</option>    
                )}
            </Select>
            {JSON.stringify(data)} 
            <Button onClick={handleBackButtonClick}>戻る</Button>
        </Container>
    )

}

export default RestaurantPage;