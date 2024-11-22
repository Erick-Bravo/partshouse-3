import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { blueButton } from "../../../assetLibrary/colors";
import Logo from "../../Assets/Logo";

const HeaderBar = () => {
  return (
    <Box h="140px" w="100%" mt="20px">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex w="900px" justifyContent="space-between" alignItems="center">
          <Flex h="40px" alignItems="center">
            <Box m="0 25px">
              <Logo objectFitValue="contain" height="60px" />
            </Box>
            <Text fontFamily="cursive" fontSize="40px" color="white">
              Partshouse
            </Text>
          </Flex>
          <Text color="white" fontSize="20px">
            Features
          </Text>
          <Text color="white" fontSize="20px">
            Plans and Pricing
          </Text>
        </Flex>
        <Box>
          <Button size="lg" fontFamily="Roboto" mr="25px">
            Log in
          </Button>
          <Button
            bgColor={blueButton}
            color="white"
            size="lg"
            fontFamily="Roboto"
            mr="25px"
          >
            Sign up
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderBar;
