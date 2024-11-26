import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { BoldTitle } from "./BuyPartsSection";
import { blueWhale, blueButton } from "../../../assetLibrary/colors";
import SeeExampleButton from "../../Buttons/SeeExampleButton";

const LogHistorySection = () => {
  return (
    <Box h="600px" p="40px 20px" bg={blueWhale}>
      <Flex justifyContent="space-around" alignItems="center" h="420px">
        <Flex
          flexDir="column"
          w="600px"
          fontFamily="Sour Gummy"
          fontSize="20px"
          color="white"
          justifyContent="center"
        >
          <BoldTitle text="Have a different technician every time something breaks?" />

          <Text pb="40px" fontSize="25px" align="left">
            Keep a log history of maintenance repairs so you don't have to
            remember for the next maintenance guy who shows up.
          </Text>
          <SeeExampleButton />
        </Flex>

        <Box>
          <Image src="/monoMario.svg" h="450px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default LogHistorySection;
