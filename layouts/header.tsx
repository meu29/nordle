import {
    Flex, 
    Heading,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useBoolean
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { useSettings } from "../hooks/setting";
import { APP_NAME } from "../utils";

const Header: React.VFC = () => {

    const [open, setOpen] = useBoolean();

    const { settings, updateWeight } = useSettings();
    const handleWeightNumberInputChange = (_: string, value: number) => updateWeight(value);

    return (
        <Flex as="nav" justify="space-between" padding={6}>
            <Heading as="h1" size="lg">{APP_NAME}</Heading>
            <IconButton icon={<SettingsIcon />} aria-label="setting" onClick={setOpen.on} />
            <Modal isOpen={open} onClose={setOpen.off}>
                <ModalOverlay />
                <ModalContent p="4" textAlign="center">
                    <ModalHeader>設定</ModalHeader>
                    <ModalBody>
                        <Text mb="3">体重</Text>
                        <NumberInput min={1} value={settings.weight} onChange={handleWeightNumberInputChange}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex> 
    );

}

export default Header;