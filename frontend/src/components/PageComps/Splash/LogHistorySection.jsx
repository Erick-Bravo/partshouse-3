import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BoldTitle } from "./BuyPartsSection";
import { blueWhale } from "../../../assetLibrary/colors";

const LogHistorySection = () => {
  return (
    <Box h="500px" p="40px 20px" bg={blueWhale}>
      <Flex justifyContent="space-around" alignItems="center" h="420px">
        <Flex
          flexDir="column"
          w="600px"
          fontFamily="Sour Gummy"
          fontSize="20px"
          h="300px"
          color="white"
          justifyContent="center"
        >
          <BoldTitle text="Have a different technician every time something breaks?" />

          <Text pb="40px" fontSize="25px">
            Keep a log history of maintenance repairs so you don't have to remember for
            the next maintenance guy who shows up.
          </Text>
        </Flex>

        <Box>
          <Image src="/monoMario.svg" h="450px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default LogHistorySection;
