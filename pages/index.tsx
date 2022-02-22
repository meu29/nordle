import type { NextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import { Container, VStack, HStack, Text, Button, Center, useToast } from "@chakra-ui/react";
import { Keyboard } from "../components/keyboard";
import { ColoredLetterBoxGroup } from "../components/colored-letter-box-group";
import { useAnswerState } from "../hooks/answer";
import { usePlayLog } from "../hooks/playlog";
import { client } from "../cms";

const IndexPage: NextPage<IndexPageProps> = ({ theme }) => {

    const { answerState, inputAnswer, deleteAnswer, submitAnswer } = useAnswerState(theme.content_furigana.length);

    const { updatePlayLog } = usePlayLog();

    const toast = useToast();

    useEffect(() => {
        if (answerState.row > 0) {
            /* ここでpositionを指定するとエラーになった */
            let toast_option = {description: `正解は${theme.content}(${theme.content_furigana})でした`, isClosable: true}
            if (answerState.answers[answerState.row - 1].join("") === theme.content_furigana) {
                toast({...toast_option, title: "正解", status: "success", position: "top"});
                updatePlayLog(true);
            } else if (answerState.row === 5) {
                toast({...toast_option, title: "不正解", status: "error", position: "top"});
                updatePlayLog(false);
            }
        }
    }, [answerState.row]);

    return (
        <Container>
            <VStack mb="10%">
                {answerState.answers.map((answer, row) => 
                    <div key={`colored-letter-${row}`}>
                        <ColoredLetterBoxGroup row={row} answer={answer} theme_content={theme.content_furigana} checked={answerState.row > row} />
                    </div>
                )}
            </VStack>
            <Keyboard handleLetterButtonClick={inputAnswer} />
            <Center>
                <HStack>
                    <Button onClick={deleteAnswer} color="white" bg="tomato">一文字削除</Button>
                    <Button onClick={submitAnswer} color="white" bg="skyblue">解答</Button>
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

    const themes = res.contents.map(content => {
        return {
            ...content,
            tag: content.tag[0]
        }
    });

    return {
        props: {
            theme: themes[Math.floor(Math.random() * themes.length)] 
        },
        revalidate: 10
    }

}

export default IndexPage;