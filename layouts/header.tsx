import NextLink from "next/link";
import { Flex, Heading, Link, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, HStack, Stack, Text, useBoolean } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { usePlayLog } from "../hooks/playlog";
import { APP_NAME } from "../utils";

const Header: React.VFC = () => {

    const [ open, setOpen ] = useBoolean();
    
    const { playlog } = usePlayLog();

    return (
        <Flex as="nav" justify="space-between" mb="3%" p="1%" borderStyle="sharp" borderBottom="1px" borderColor="#d3d6da">
            <NextLink passHref href="/">
                <Link>
                    <Heading as="h1" size="lg">{APP_NAME}</Heading>
                </Link>
            </NextLink>
            <IconButton icon={<InfoIcon />} aria-label="help" onClick={setOpen.on} />
            <Modal isOpen={open} onClose={setOpen.off}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">プレイログ</ModalHeader>
                    <ModalBody>
                        <HStack>
                            <Stack>
                                <Text>プレイ回数</Text>
                                <Text>{playlog.play_num}</Text>
                            </Stack>
                            <Stack>
                                <Text>正解率</Text>
                                <Text>{`${playlog.clear_num === 0 ? 0 : playlog.clear_num / playlog.play_num * 100}%`}</Text>
                            </Stack>
                            <Stack>
                                <Text>連続正解数</Text>
                                <Text>{playlog.current_streak}</Text>
                            </Stack>
                            <Stack>
                                <Text>最高連続正解数</Text>
                                <Text>{playlog.max_streak}</Text>
                            </Stack>
                        </HStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex> 
    );

}

export default Header;