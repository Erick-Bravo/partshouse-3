import { Flex, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex pl="50px" w={["100%", "50%"]}>
      <Image src="./PartshouseMain.svg" />
    </Flex>
  );
};

export default Logo;
