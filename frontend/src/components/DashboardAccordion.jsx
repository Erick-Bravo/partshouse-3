import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from "@chakra-ui/react";
import { blueWhaleLight, whitePaper } from "../assetLibrary/colors";

const DashboardAccordion = () => {
  const records = [
    {
      _id: "fgjhfdfgn",
      name: "Record 1",
      parts: [
        {
          _id: ",jyhikrhdfdvbhfd",
          name: "Part 1",
        },
        {
          _id: "rhdfdvbhfd",
          name: "Part 2",
        },
        {
          _id: "ikrhdfdvbhfd",
          name: "Part 3",
        },
      ],
    },
    {
      _id: "fgjhfdf",
      name: "Record 2",
      parts: [
        {
          _id: "jjdhuhnkdffd",
          name: "Part 1",
        },
        {
          _id: "jjhnkdfnmhfd",
          name: "Part 2",
        },
        {
          _id: "jjdfd",
          name: "Part 3",
        },
      ],
    },
    {
      _id: "fgfdfgn",
      name: "Record 3",
      parts: [
        {
          _id: "jjdhuhnkdfnmhfd",
          name: "Part 1",
        },
        {
          _id: "jjdhuhnkdhfd",
          name: "Part 2",
        },
        {
          _id: "juhnkdfnmhfd",
          name: "Part 3",
        },
      ],
    },
  ];

  return (
    <Accordion allowMultiple w="100%">
      <Flex flexDir="column" alignItems="center">
        {records.length > 0 ? records.map((record) => {
          return (
            <AccordionItem w="100%" maxW="900px" mb="20px" borderRadius="15px" key={record._id}>
              <h2>
                <AccordionButton
                  w="100%"
                  maxW="900px"
                  h="60px"
                  bg={whitePaper}
                  borderRadius="15px"
                  _hover={{bg: blueWhaleLight, color: "white"}}
                >
                  <Box as="span" flex="1" textAlign="left">
                    {record.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                bg={whitePaper}
                borderRadius="15px"
                mt="5px"
              >
                {record.parts.map((part) => {
                  return <h3 key={part._id}>{part.name}</h3>;
                })}
              </AccordionPanel>
            </AccordionItem>
          );
        }): "No Records Found"}
      </Flex>
    </Accordion>
  );
};

export default DashboardAccordion;
