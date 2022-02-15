import type { NextApiRequest, NextApiResponse } from "next";
import { point } from "@turf/helpers";
import distance from "@turf/distance";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const data = await (await fetch(`https://map.yahooapis.jp/search/local/V1/localSearch?dist=4&gc=0306006&lat=${req.query.lat}&lon=${req.query.lon}&sort=-dist&appid=${process.env.YAHOO_API_KEY}&output=json`)).json();
        /* [緯度,経度]ではなく[経度,緯度] */
        const restaurant_point = point([Number(req.query.lon), Number(req.query.lat)]);
        return res.status(200).json({stations: data.Feature.map(content => {
            /* "経度,緯度"の文字列 */
            const coordinates = content.Geometry.Coordinates.split(",");
            const oneline_distance = distance(restaurant_point, point([coordinates[0], coordinates[1]]), {units: "kilometers"});
            return {
                name: content.Name,
                oneline_distance: oneline_distance,
                /* 家系は800 ~ 1000カロリー */
                /* 消費カロリー(kcal) = 距離(km) * 体重(kg) 往復なら×2 */
                burned_calorie: 900 - oneline_distance * Number(req.query.weight)
            }
        })});
    } catch (err) {
        console.log(err);
        return res.status(500);
    }

}