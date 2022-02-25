npm run dev
/* OK */
import { ChakraProvider } from "@chakra-ui/react";
/* NG */
import ChakraProvider from "@chakra-ui/react/src/chakra-provider";
import { ChakraProvider } from "@chakra-ui/react/src/chakra-provider";
環境変数の先頭にNEXT_PUBLICを付けるとブラウザとサーバーの両方で使用できる。付けないとサーバー側のみ(ApiRoutesやSSR, SSGなど)

import { createClient } from "microcms-js-sdk";

/* utils/index.tsに記述するとエラーになった */
/* 公式の例ではlibs/client.tsに記述することになっているが、libs2/index.tsでも動いた */
/* utils/index.tsだと他の定数と一緒にエクスポートされるから? */
export const client = createClient({
    serviceDomain: "meuzi-reminder",
    apiKey: process.env.MICRO_CMS_API_KEY
});
/* プロパティのユニオン型 */
type HogeKey = keyof Hoge;
/* エラー */
type Fuga = {
    [hoge: HogeKey]: string;
}
/* 正しい書き方 */
type Fuga = {
    [hoge in HogeKey]: string;
}

/* Reminder型のプロパティのどれか(ユニオン型 "hoge" | "fuga" | "piyo") */
type Keys = param keyof Reminder;
/* Reminder型のプロパティを全て満たさなければならない */
type Keys = param in keyof Reminder;
あるモジュール(関数やクラス)が別のモジュールを直接呼び出す => 前者は後者に依存する
参考: https://www.membersedge.co.jp/blog/typescript-solid-dependency-inversion-principle/

NextLinkはルーティング機能
Linkはaタグを付与(マウスポインタを合わせた時に浮かび上がる)
```
/* flatMap()の使い方 */
restaurants.flatMap(restaurant =>
    (restaurant.type.includes(searchState.type) && restaurant.address.includes(searchState.pref)) ? (
        <Text>{restaurant.name}</Text>
    ): []
) 
```