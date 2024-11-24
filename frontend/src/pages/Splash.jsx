import { Box, Flex } from "@chakra-ui/react";
import HeaderBar from "../components/PageComps/Splash/HeaderBar";
import Intro from "../components/PageComps/Splash/Intro";
import BuyPartsSection from "../components/PageComps/Splash/BuyPartsSection";

const Splash = () => {
  return (
    <>
      <Flex flexDir="column" w="100%">
        <HeaderBar />
        <Intro />
        <BuyPartsSection />
      </Flex>
    </>
  );
};

export default Splash;
