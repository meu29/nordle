import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const keyword = Array.isArray(req.query.keyword) ? req.query.keyword[0] : req.query.keyword;
    const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.HOTPEPPER_API_KEY}&format=json&keyword=${encodeURI(keyword)}`;

    try {
        const data = await (await fetch(url)).json();
        return res.json({shops: data.results.shop.map(shop => {
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