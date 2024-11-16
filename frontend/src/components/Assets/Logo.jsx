import { Flex, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex pt={["30%", "30%", "20%", "0"]}>
      <Image objectFit="contain" src="./old-partshouse.png" />
    </Flex>
  );
};

export default Logo;
