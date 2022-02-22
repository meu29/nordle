import Image from "next/image";
import { Center, Heading, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, VStack, useBoolean } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { PlaylogStatck } from "../components/playlog-stack"
import { usePlayLog } from "../hooks/playlog";
import { APP_NAME } from "../utils";

const Header: React.VFC = () => {

    const [ open, setOpen ] = useBoolean();
    
    const { playlog } = usePlayLog();

    return (
        <Center as="nav" mb="3%" p="1%" justifyContent="space-between" borderStyle="sharp" borderBottom="1px" borderColor="#d3d6da">
            <Image src="/iekei.png" height="50%" width="50%" />
            <Heading as="h1" size="lg">{APP_NAME}</Heading>
            <IconButton icon={<InfoIcon />} aria-label="help" bg="#ffffff" onClick={setOpen.on} />
            <Modal isOpen={open} onClose={setOpen.off}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">プレイログ</ModalHeader>
                    <ModalBody>
                        <VStack>                        
                            <PlaylogStatck label="プレイ数" value={playlog.play_num} unit="回" />
                            <PlaylogStatck label="正解率" value={playlog.clear_num === 0 ? 0 : Math.ceil(playlog.clear_num / playlog.play_num * 100)} unit="%" />
                            <PlaylogStatck label="連続正解数" value={playlog.current_streak} unit="" />
                            <PlaylogStatck label="最高連続正解数" value={playlog.max_streak} unit="" />
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Center> 
    );

}

export default Header;