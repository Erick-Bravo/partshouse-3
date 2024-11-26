import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { blueButton, blueWhale } from "../../../assetLibrary/colors";
import Logo from "../../Assets/Logo";

const HeaderBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="100px"
      w="100%"
      bg={blueWhale}
    >
      <Flex w="800px" justifyContent="space-between" alignItems="center">
        <Flex h="40px" alignItems="center">
          <Box m="0 25px">
            <Logo objectFitValue="contain" height="60px" />
          </Box>
          <Text fontFamily="cursive" fontSize="40px" color="white">
            PartsHouse
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
        <Link href="/login">
          <Button size="lg" fontFamily="Roboto" mr="25px">
            Log in
          </Button>
        </Link>
        <Link href="/register">
          <Button
            bgColor={blueButton}
            color="white"
            size="lg"
            fontFamily="Roboto"
            mr="25px"
          >
            Sign up
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default HeaderBar;
