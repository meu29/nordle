import Image from "next/image";
import { Center, Heading, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, VStack, useBoolean } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { APP_NAME } from "../utils";

const Header: React.VFC = () => {

    const [ open, setOpen ] = useBoolean();

    return (
        <Center as="nav" mb="3%" p="1%" borderStyle="sharp" borderBottom="1px" borderColor="#d3d6da">
            <Image src="/iekei.png" height="50%" width="50%" />
            <Heading as="h1" size="lg">{APP_NAME}</Heading>
            <IconButton icon={<InfoIcon />} aria-label="help" bg="#ffffff" onClick={setOpen.on} />
        </Center> 
    );

}

export default Header;