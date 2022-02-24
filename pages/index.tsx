import type { NextPage, GetStaticProps } from "next";
import { Container, HStack, Button, Box, Text, useToast } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { useAnswerState } from "../hooks/answer";
import { KEYBOARD_LETTERS } from "../utils";

const IndexPage: NextPage<IndexPageProps> = ({ theme }) => {

    const { answerState, inputAnswer, deleteAnswer, submitAnswer } = useAnswerState(theme.content_furigana);
    const toast = useToast();
/*
    useEffect(() => {
        if (answerState.answers.includes(theme.content_furigana)) {
            toast({
                title: "正解",
                description: `${theme.content}(${theme.content_furigana})`,
                isClosable: true,
                position: "top"
            });
        } else if (answerState.index === 5) {
            toast({
                title: "時間切れ",
                description: `${theme.content}(${theme.content_furigana})`,
                isClosable: true,
                position: "top"
            });
        }
    }, []);
*/

    return (
        <Container>
            {Object.keys(answerState.answers).map(row => (
                <HStack mb="1%" key={`theme-${row}`}>
                    {Object.keys(answerState.colors[row]).map(col => (
                        <Box key={`theme-${row}-${col}`} p="5" borderWidth="1px" borderRadius="lg" color={answerState.colors[row][col].color} bg={answerState.colors[row][col].bg}>
                            {answerState.answers[row][col] === undefined ? "　" : answerState.answers[row][col]}
                        </Box>
                    ))}
                </HStack>
            ))}
            <Box mb="3%">
                {KEYBOARD_LETTERS.map((letters, i) => 
                    useMemo(() => (
                        <HStack key={`keyboard-row-${i}`} mb="1%">
                            {letters.map((letter, j)  => (
                                <Button key={`keyboard-row-${i}-${j}`} disabled={letter === "　"} onClick={() => inputAnswer(letter)}>{letter}</Button>
                            ))}
                        </HStack>
                    ), [])
                )}
            </Box>
            <Button onClick={deleteAnswer}>Delete</Button>
            <Button onClick={submitAnswer}>Enter</Button>
            {theme.content}
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