import type { NextPage, GetStaticProps } from "next";
import { Container, HStack, Button, Box, Center, useToast } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { useAnswerState } from "../hooks/answer";
import { KEYBOARD_LETTERS } from "../utils";

const IndexPage: NextPage<IndexPageProps> = ({ theme }) => {

    const { answerState, inputAnswer, deleteAnswer, submitAnswer } = useAnswerState(theme.content_furigana);
    const toast = useToast();

    useEffect(() => {
        if (answerState.status === "SUCCESS" || answerState.status === "FAILURE") {
            toast({
                title: `${theme.content}(${theme.content_furigana})`,
                isClosable: true,
                position: "top"
            });
        }
    }, [answerState.status]);

    return (
        <Container>
            <Box mb="10%">
                {Object.keys(answerState.answers).map(row => (
                    <HStack mb="1%" key={`theme-${row}`}>
                        {Object.keys(answerState.colors[row]).map(col => (
                            <Box key={`theme-${row}-${col}`} p="5" borderWidth="1px" borderRadius="lg" color={answerState.colors[row][col].color} bg={answerState.colors[row][col].bg}>
                                {answerState.answers[row][col] === undefined ? "　" : answerState.answers[row][col]}
                            </Box>
                        ))}
                    </HStack>
                ))}
            </Box>
            <Box mb="3%">
                {KEYBOARD_LETTERS.map((letters, row) => 
                    useMemo(() => (
                        <HStack key={`keyboard-row-${row}`} mb="1%">
                            {letters.map((letter, col)  => (
                                <Button key={`keyboard-row-${row}-${col}`} disabled={answerState.status !== "PLAYING"} onClick={() => inputAnswer(letter)}>{letter}</Button>
                            ))}
                        </HStack>
                    ), [answerState.status])
                )}
            </Box>
            <Center>
                <HStack>
                    <Button onClick={deleteAnswer} disabled={answerState.status !== "PLAYING"}>Delete</Button>
                    <Button onClick={submitAnswer} disabled={answerState.status !== "PLAYING"}>Enter</Button>
                </HStack>
            </Center>
        </Container>
    )

}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            theme: {
                id: "sample",
                content: "家系ラーメン",
                content_furigana: "いえけいらーめん",
                tag: "ラーメン",
            }
        }
    }
}

export default IndexPage;