import { HStack, Text } from "@chakra-ui/react";

export const PlaylogStatck: React.VFC<{label: string, value: number, unit: string}> = ({ label, value, unit }) => {

    return (
        <HStack spacing="20px">
            <Text fontSize="18px">{label}</Text>
            <Text fontSize="18px">{`${value}${unit}`}</Text>
        </HStack>
    );

}