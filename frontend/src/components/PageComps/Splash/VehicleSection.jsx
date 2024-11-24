import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { blueWhale } from "../../../assetLibrary/colors";
import { BoldTitle } from "./BuyPartsSection";

const VehicleSection = () => {
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
          <BoldTitle text="Own a vehicle?" />
          <Text pb="40px" fontSize="25px">
            Keep track of last service history for your car or motorcycle and
            get notified once it's time for a service.
          </Text>
          <Text pb="40px" fontSize="25px">
            We can also save the VIN number in your account so you never have to
            look for it again!
          </Text>
        </Flex>

        <Box>
          <Image src="/carAndMoto.svg" h="400px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default VehicleSection;
