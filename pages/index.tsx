import type { NextPage, GetStaticProps } from "next";
import { Container, Box, VStack, HStack, Input, Text, Button, Center } from "@chakra-ui/react";
import { Keyboard } from "../components/keyboard";
import { ColoredLetterBoxGroup } from "../components/colored-letter-box-group";
import { useAnswerState } from "../hooks/answer";

import { client } from "../cms";

import { useEffect } from "react";

const IndexPage: NextPage<{themes: WordleTheme[]}> = ({ themes }) => {

    const { answerState, initAnswers, inputAnswer, deleteAnswer, submitAnswer } = useAnswerState();
    /*
    useEffect(() => {
        if (answerState.answers) {
            alert("終了")
        }
    }, [past_answers])
    */

    useEffect(() => initAnswers(themes[Math.floor(Math.random() * themes.length)]), []);

    return (
        <Container>
            {JSON.stringify(answerState)}
            <VStack mb="10%">
                {answerState.answers.map((answer, row) => 
                    <ColoredLetterBoxGroup answer={answer} theme={answerState.theme.content_furigana} checked={answerState.row > row} />)
                }
                {/*Object.values(answerState.colored_past_answers).map((answer, i) => <Box key={i}><ColoredLetterBoxGroup answer={answer} theme={themes[0].content_furigana} checked={false} /></Box> )*/}
            </VStack>
            <Keyboard handleLetterButtonClick={inputAnswer} />
            <Center>
                <HStack>
                    <Button onClick={deleteAnswer}>一文字消す</Button>
                    <Button onClick={submitAnswer}>Enter</Button>
                </HStack>
            </Center>
        </Container>
    );

}

export const getStaticProps: GetStaticProps = async () => {

    const res = await client.get({
        endpoint: "themes",
        queries: {
            fields: "id,content,content_furigana,tag"
        }
    });

    //ここで店apiも叩く
    return {
        props: {
            themes: res.contents.map(content => {
                return {
                    ...content,
                    tag: content.tag[0]
                }
            })
        }
    }

}

export default IndexPage;