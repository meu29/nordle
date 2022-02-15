import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { APP_NAME } from "../utils";
import Layout from "../layouts";

const App = ({ Component, pageProps }: AppProps) => {

    return (
        <>
            <Head>
                <meta charSet="utf-8" lang="ja" />
                <title>{APP_NAME}</title>
            </Head>
            <RecoilRoot>
                <ChakraProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </RecoilRoot>
        </>
    );
}

export default App;