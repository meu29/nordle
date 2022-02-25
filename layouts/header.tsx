import Image from "next/image";
import { useRouter } from "next/router";
import { Center, Heading, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Text, Box, HStack, VStack, useBoolean, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { InfoIcon, SearchIcon, DeleteIcon } from "@chakra-ui/icons";
import { usePastThemes } from "../hooks/past-theme";
import { APP_NAME } from "../utils";

const Header: React.VFC = () => {

    const { past_themes, deletePastTheme } = usePastThemes();

    const [ open, setOpen ] = useBoolean();

    const router = useRouter();
    const handleSearchButtonClick = async (keyword: string) => router.push(`/restaurants?keyword=${keyword}`);

    return (
        <Center as="nav" mb="3%" p="1%" borderStyle="sharp" borderBottom="1px" borderColor="#d3d6da">
            <Image src="/iekei.png" height="50%" width="50%" />
            <Heading as="h1" size="lg">{APP_NAME}</Heading>
            <IconButton icon={<InfoIcon />} aria-label="help" bg="#ffffff" onClick={setOpen.on} />
            <Modal isOpen={open} onClose={setOpen.off}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader alignSelf="center">解答ログ</ModalHeader>
                    <ModalBody>
                        <Table>
                            <Tbody>
                                {Object.values(past_themes).map(theme => 
                                    <Tr>
                                        <Td>{theme.content}</Td>
                                        <Td>
                                            <IconButton icon={<SearchIcon />} aria-label="search" onClick={() => handleSearchButtonClick(theme.content)} />
                                            <IconButton icon={<DeleteIcon />} aria-label="delete" onClick={() => deletePastTheme(theme.id)} />
                                        </Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Center> 
    );

}

export default Header;