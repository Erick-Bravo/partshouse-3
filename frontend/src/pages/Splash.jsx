import { Box, Flex } from "@chakra-ui/react";
import HeaderBar from "../components/PageComps/Splash/HeaderBar";
import Intro from "../components/PageComps/Splash/Intro";
import BuyPartsSection from "../components/PageComps/Splash/BuyPartsSection";
import LogHistorySection from "../components/PageComps/Splash/LogHistorySection";
import VehicleSection from "../components/PageComps/Splash/VehicleSection";
import PartsSearchSection from "../components/PageComps/Splash/PartsSearchSection";
import PricingSection from "../components/PageComps/Splash/PricingSection";

const Splash = () => {
  return (
    <>
      <Flex flexDir="column" w="100%">
        <HeaderBar />
        <Intro />
        <BuyPartsSection />
        <LogHistorySection />
        <PartsSearchSection />
        <VehicleSection />
        <PricingSection />
      </Flex>
    </>
  );
};

export default Splash;
