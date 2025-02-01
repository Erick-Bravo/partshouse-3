import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { blueButton, blueWhale } from "../../../assetLibrary/colors";
import SeeExampleButton from "../../Buttons/SeeExampleButton";

export const BoldTitle = ({ text }) => {
  return (
      <Text
        pb="40px"
        fontWeight="bold"
        fontSize="32px"
        align="left"  
        fontFamily="Roboto"
      >
        {text}
      </Text>

  );
};

const BuyPartsSection = () => {
  return (
    <Box h="600px" p="40px 20px" bg={blueWhale}>
      <Flex justifyContent="space-around" alignItems="center" h="420px">
        <Box>
          <Image src="/repurchase.gif" h="400px" />
        </Box>

        <Flex
          flexDir="column"
          w="600px"
          fontFamily="Sour Gummy"
          fontSize="20px"
          color="white"
          justifyContent="center"
        >
          <BoldTitle text="Keep forgetting to buy replacement parts?" />
          <Text pb="40px" fontSize="25px" align="left">
            Easily schedule notifications for when an item needs to be
            re-purchased like filters for your refrigerator, air conditioning,
            and furnace.
          </Text>

          <SeeExampleButton />
        </Flex>
      </Flex>
    </Box>
  );
};

export default BuyPartsSection;
