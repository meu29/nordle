import { NextApiRequest, NextApiResponse } from "next";

const getQueryValue = (query_value: string | string[]) => Array.isArray(query_value) ? query_value[0] : query_value;

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.HOTPEPPER_API_KEY}&format=json&keyword=${encodeURI(getQueryValue(req.query.keyword))}&large_area=${getQueryValue(req.query.pref_code)}`;

    try {
        const data = await (await fetch(url)).json();
        return res.json({restaurants: data.results.shop.map(shop => {
            return {
                name: shop.name,
                address: shop.address
            }
        })});
    } catch (err) {
        console.log(err);
        return res.status(500);
    }

}