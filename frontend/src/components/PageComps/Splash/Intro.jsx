import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Box h="650px" bg="white" p="0 20px">
      <Box p="60px 0">
        <Text fontSize="60px" fontWeight="bold" fontFamily="Roboto">
          What will you{" "}
          <Text as="span" color="#008573">
            keep track
          </Text>{" "}
          of today?
        </Text>
      </Box>

      <Flex justifyContent="space-around" h="420px">
        <Flex
          flexDir="column"
          w="600px"
          fontFamily="Sour Gummy"
          fontSize="20px"
          h="300px"
        >
          <Text pb="40px">
            Partshouse makes it easy to document warranties, log maintenance
            history, find parts for broken appliances, and set reminders for
            items that need to be replaced on schedule.
          </Text>
          <Text pb="40px">
            With Partshouse, you no longer have to worry about keeping track of
            your home on your own, allowing you to focus on what matters most.
          </Text>
          <Text>Check out all the amazing features for your home below.</Text>
        </Flex>

        <Box >
          <Image src="/womanInLivingRoom.svg" h="400px"/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Intro;
