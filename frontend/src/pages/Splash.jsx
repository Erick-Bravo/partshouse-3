import { Box, Flex } from "@chakra-ui/react";
import HeaderBar from "../components/PageComps/Splash/HeaderBar";
import Intro from "../components/PageComps/Splash/Intro";

const Splash = () => {
  return (
    <>
      <Flex flexDir="column" w="100%">
        <HeaderBar />
        <Intro />
      </Flex>
    </>
  );
};

export default Splash;
