import { useMemo } from "react";
import { HStack, Box, Text } from "@chakra-ui/react";

const makeLetterStyles = (answer: Answer, theme_content: string, checked: boolean): LetterStyle[] => {

    if (checked === false) {
        return [...Array(answer.length)].map(_ => {      
            return {
                color: "#000000",
                bg: "#ffffff"
            }
        })
    }

    const base = {color: "#ffffff"}

    return answer.map((letter, pos) => {
        if (letter === theme_content[pos]) {
            return {
                ...base,
                bg: "#4caf50"
            }
        } else if (theme_content.includes(letter)) {
            return {
                ...base,
                bg: "#C9B458"
            }
        } else {
            return {
                ...base,
                bg: "#757575"
            }
        }
    });
    

}

export const ColoredLetterBoxGroup: React.VFC<ColoredLetterBoxGroupProps> = ({ row, answer, theme_content, checked }) => {

    return useMemo(() => {

        const styles = makeLetterStyles(answer, theme_content, checked);

        return (
            <HStack>
                {answer.map((letter, col) => {
                    return (
                        <Box key={`colored-letter-${row}-${col}`} p="5" borderWidth="1px" borderRadius="lg" color={styles[col].color} bg={styles[col].bg}>
                            <Text fontWeight="bold">{letter}</Text>
                        </Box>
                    )
                })}
            </HStack>
        )

    }, [JSON.stringify(answer), theme_content, checked]);

}