import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({ 
    styles: {
        global: {
            body: {
                bg: "#ffffff" //"#eff6fb99",
            },
            a: {
                textDecoration: "inherit" //"none"でも消えない
            }
        }
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: true,
    }
})