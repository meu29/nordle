import NextLink from "next/link";
import { Flex, Heading, Link, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Select, useBoolean } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { useSettings } from "../hooks/setting";
import { APP_NAME } from "../utils";

const Header: React.VFC = () => {

    const [ open, setOpen ] = useBoolean();
    const { settings, updatePref } = useSettings();

    return (
        <Flex as="nav" justify="space-between" padding={6}>
            <NextLink passHref href="/">
                <Link>
                    <Heading as="h1" size="lg">{APP_NAME}</Heading>
                </Link>
            </NextLink>
            <IconButton icon={<SettingsIcon />} aria-label="setting" onClick={setOpen.on} />
            <Modal isOpen={open} onClose={setOpen.off}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>設定</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex> 
    );

}

export default Header;