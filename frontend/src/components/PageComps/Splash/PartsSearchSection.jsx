import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { BoldTitle } from "./BuyPartsSection";
import { blueWhale, blueButton } from "../../../assetLibrary/colors";

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
          color="white"
          justifyContent="center"
        >
          <BoldTitle text="Broken parts?" />

          <Text pb="40px" fontSize="25px" align="left">
            With the model number of an appliance, Partshouse can look up
            associated parts for that item!
          </Text>
          <Text pb="40px" fontSize="25px" align="left">
            Oh, and we'll save the model number for you so you don't have to
            re-enter for the next time.
          </Text>
          <Button
            bgColor={blueButton}
            color="white"
            size="lg"
            fontFamily="Roboto"
            w="180px"
          >
            See Example
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PartsSearchSection;
