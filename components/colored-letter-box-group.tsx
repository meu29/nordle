import { useMemo } from "react";
import { HStack, Box, Text } from "@chakra-ui/react";

const styledLetter = (checked: boolean): {color: string, bg: string} => {
    if (checked === true) {
        return {
            color: "#ffffff",
            bg: "#757575"
        }
    } else {
        return {
            color: "#000000",
            bg: "#ffffff"
        }
    }
}

export const ColoredLetterBoxGroup: React.VFC<ColoredLetterBoxGroupProps> = ({ answer, theme, checked }) => {

    return useMemo(() => (
            <HStack>
                {answer.map((letter, index) => {
                    const style = styledLetter(checked);
                    return (
                        <Box p="5" borderWidth="1px" borderRadius="lg" color={style.color} bg={style.bg}>
                            <Text fontWeight="bold">{letter}</Text>
                        </Box>
                    )
                })}
            </HStack>
        ), [JSON.stringify(answer), theme, checked]);

}

//　#C9B458　黄色　// #4caf50　緑