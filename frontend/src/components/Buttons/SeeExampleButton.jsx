import { Button } from "@chakra-ui/react";
import { blueButton } from "../../assetLibrary/colors";

const SeeExampleButton = () => {
  return (
    <Button
    bgColor={blueButton}
    color="white"
    size="lg"
    fontFamily="Roboto"
    w="180px"
    
  >
    See Example
  </Button>
  )
}

export default SeeExampleButton;