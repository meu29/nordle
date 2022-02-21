import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react";
import Layout from "../layouts";
import { theme } from "../themes";
import { APP_NAME } from "../utils";

const App = ({ Component, pageProps }: AppProps) => {

    return (
        <>
            <Head>
                <meta charSet="utf-8" lang="ja" />
                <title>{APP_NAME}</title>
            </Head>
            <RecoilRoot>
                <ChakraProvider theme={theme}>
                    <CSSReset />
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </RecoilRoot>
        </>
    );
}

export default App;