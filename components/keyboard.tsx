import { useMemo } from "react";
import { Box, HStack, Button } from "@chakra-ui/react";
import { KEYBOARD_LETTERS } from "../utils";

export const Keyboard: React.VFC<KeyboardProps> = ({ handleLetterButtonClick }) => {

    return useMemo(() => (
        <Box mb="3%">
            {KEYBOARD_LETTERS.map((letters, i) => (
                <HStack key={`keyboard-row-${i}`} mb="1%">
                    {letters.map((letter, j)  => (
                        <Button color="#ffffff" bg="#000000" key={`keyboard-row-${i}-${j}`} disabled={letter === "　"} onClick={() => handleLetterButtonClick(letter)}>{letter}</Button>
                    ))}
                </HStack>
            ))}
        </Box>
    ), []);

}