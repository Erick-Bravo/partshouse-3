import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { blueWhale } from "../../../assetLibrary/colors";

const BoldTitle = ({ text }) => {
  return (
    <Text pb="40px" fontWeight="bold" fontSize="29px">
      {text}
    </Text>
  );
};

const BuyPartsSection = () => {
  return (
    <Box h="500px" p="40px 20px" bg={blueWhale}>
      <Flex justifyContent="space-around" alignItems="center" h="420px">
        <Box>
          <Image src="/repurchase.gif" h="400px" />
        </Box>

        <Flex
          flexDir="column"
          w="600px"
          fontFamily="Sour Gummy"
          fontSize="20px"
          h="300px"
          color="white"
          justifyContent="center"
        >
          <BoldTitle text="Keep forgetting to buy replacement parts?" />
          <Text pb="40px" fontSize="25px">
            Easily schedule notifications for when an item needs to be
            re-purchased like filters for your refrigerator, air conditioning,
            and furnace.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BuyPartsSection;
