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

const DashboardAccordion = ({records, parts}) => {

  return (
    <Accordion allowMultiple w="100%">
      <Flex flexDir="column" alignItems="center">
        {records ? records.map((record) => {
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
                {parts.map((part) => {
                  if (part.recordId === record._id) {
                    return (
                      <>
                        {part.name}
                      </>
                    )
                  }
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
