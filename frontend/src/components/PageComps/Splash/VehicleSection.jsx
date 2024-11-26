import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { blueWhale, blueButton } from "../../../assetLibrary/colors";
import { BoldTitle } from "./BuyPartsSection";
import SeeExampleButton from "../../Buttons/SeeExampleButton";

const VehicleSection = () => {
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
          <BoldTitle text="Own a vehicle?" />
          <Text pb="40px" fontSize="25px" align="left">
            Keep track of last service history for your car or motorcycle and
            get notified once it's time for a service.
          </Text>
          <Text pb="40px" fontSize="25px" align="left">
            We can also save the VIN number in your account so you never have to
            look for it again!
          </Text>

          <SeeExampleButton />
          
        </Flex>

        <Box>
          <Image src="/carAndMoto.svg" h="400px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default VehicleSection;
