import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { blueWhaleLight, whitePaper } from "../assetLibrary/colors";

const DashboardAccordion = ({ records, parts, selected }) => {
  //Dashboard needs logic:
  //  - If record.phId === selected: pass record into dashboard accordion
  //  - if Object.keys(selected).length === 0: show dashboard already created

  return (
    <Accordion allowMultiple w="100%">
      <Flex flexDir="column" alignItems="center">
        {records
          ? records.map((record) => {
              {
                if (record.phId === selected._id) {
                  return (
                    <AccordionSetup
                      record={record}
                      parts={parts}
                      key={record._id}
                    />
                  );
                }
              }
              {
                if (Object.keys(selected).length === 0) {
                  return (
                    <AccordionSetup
                      record={record}
                      parts={parts}
                      key={record._id}
                    />
                  );
                }
              }
            })
          : "No Records Found"}
      </Flex>
    </Accordion>
  );
};

export default DashboardAccordion;

const AccordionSetup = ({ record, parts }) => {
  return (
    <AccordionItem
      w="100%"
      maxW="900px"
      mb="20px"
      borderRadius="15px"
      key={record._id}
    >
      <h2>
        <AccordionButton
          w="100%"
          maxW="900px"
          h="60px"
          bg={whitePaper}
          borderRadius="15px"
          _hover={{ bg: blueWhaleLight, color: "white" }}
        >
          <Box as="span" flex="1" textAlign="left">
            {record.name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} bg={whitePaper} borderRadius="15px" mt="5px">
        {parts.map((part) => {
          if (part.recordId === record._id) {
            return <Text key={part._id}>{part.name}</Text>;
          }
        })}
      </AccordionPanel>
    </AccordionItem>
  );
};
