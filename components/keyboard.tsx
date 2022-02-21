import { useMemo } from "react";
import { Box, HStack, Button } from "@chakra-ui/react";
import { KEYBOARD_LETTERS } from "../utils";

export const Keyboard: React.VFC<{handleLetterButtonClick: (letter: string) => void}> = ({ handleLetterButtonClick }) => {

    return (
        <Box mb="3%">
            {KEYBOARD_LETTERS.map((row, i) => (
                <HStack key={`row-${i}`} mb="1%">
                    {row.map(letter => (
                        <Button key={letter} disabled={letter === "　"} onClick={() => handleLetterButtonClick(letter)}>{letter}</Button>
                    ))}
                </HStack>
            ))}
        </Box>
    );

}