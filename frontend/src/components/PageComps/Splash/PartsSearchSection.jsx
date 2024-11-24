import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BoldTitle } from "./BuyPartsSection";
import { blueWhale } from "../../../assetLibrary/colors";

const PartsSearchSection = () => {
  return (
    <Box h="500px" p="40px 20px" bg={blueWhale}>
      <Flex justifyContent="space-around" alignItems="center" h="420px">
        <Box>
          <Image src="/roboSearch.gif" h="450px"  />
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
          <BoldTitle text="Broken parts?" />

          <Text pb="40px" fontSize="25px">
            With the model number of an appliance, Partshouse can look up
            associated parts for that item!
          </Text>
          <Text pb="40px" fontSize="25px">
            Oh, and we'll save the model number for you so you don't have to
            re-enter for the next time.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PartsSearchSection;
