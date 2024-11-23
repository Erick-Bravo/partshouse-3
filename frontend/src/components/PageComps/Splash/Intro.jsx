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

      <Flex justifyContent="space-around" alignItems="center" h="420px">
        <Flex
          flexDir="column"
          justifyContent="space-between"
          w="550px"
          fontFamily="Roboto"
          fontSize="18px"
          h="300px"
        >
          <Text>
            Partshouse makes it easy to document warranties, log maintenance
            history, find parts for broken appliances, and set reminders for
            items that need to be replaced on schedule.
          </Text>
          <Text>
            With Partshouse, you no longer have to worry about keeping track of
            your home on your own, allowing you to focus on what matters most.
          </Text>
          <Text>Check out all the amazing features for your home below.</Text>
        </Flex>

        <Box>
          <Image src="/womanInLivingRoom.svg" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Intro;
