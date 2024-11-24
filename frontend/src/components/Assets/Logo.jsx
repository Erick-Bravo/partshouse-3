import { Flex, Image } from "@chakra-ui/react";

const Logo = ({ objectFitValue, height }) => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Image
        objectFit={objectFitValue}
        src="./old-partshouse.png"
        h={height}
        transform="scale(-1, 1)"
      />
    </Flex>
  );
};

export default Logo;
