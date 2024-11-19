import { Box, Flex, Text } from "@chakra-ui/react";

const HeaderBar = () => {
  return (
    <Box bg="white" h="60px" w="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontFamily="sans-serif" fontWeight="Bold" fontSize="40px"  >Partshouse</Text>
      </Flex>
    </Box>
  );
};

export default HeaderBar;
