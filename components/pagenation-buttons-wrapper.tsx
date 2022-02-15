import { 
    Center,
    HStack,
    Button 
} from "@chakra-ui/react";

const PagenationButtonsWrapper: React.VFC<PagenationButtonsWrapperProps> = ({ handleBackPageButtonClick, handleFowardPageButtonClick }) => {

    return (
        <Center>
            <HStack>
                <Button onClick={handleBackPageButtonClick}>前の10件</Button>
                <Button onClick={handleFowardPageButtonClick}>次の10件</Button>
            </HStack>
        </Center>
    )

}

export default PagenationButtonsWrapper;