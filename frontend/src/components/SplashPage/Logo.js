import { Flex, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex pl={["0", "0", "40px"]} pt={["30%", "30%", "20%", "0"]} w={["100%"]}>
      <Image src="./PartshouseMain.svg" />
    </Flex>
  );
};

export default Logo;
