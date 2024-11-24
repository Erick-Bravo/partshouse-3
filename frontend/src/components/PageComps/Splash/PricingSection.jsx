import { Box, Flex, Image, Text } from "@chakra-ui/react";

const PricingSection = () => {
  return (
    <Box h="500px" pt="40px">
      <Text fontSize="60px" fontWeight="bold" fontFamily="Roboto">
        Partshouse is 100% FREE!
      </Text>
      <Text fontSize="60px" fontWeight="bold" fontFamily="Roboto">
        ...for now
      </Text>
      <Flex justifyContent="center" alignItems="center" pt="20px">
        <Box fontSize="25px" w="1300px">
          <Text pb="30px">
            Access to more advanced features or multiple properties may be
            behind a pay wall with a small yearly fee, but we have not decided
            when this should happen.
          </Text>
          <Text>
            So, have fun with the app and give us feedback in the meantime.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PricingSection;
