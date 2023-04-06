import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { blueWhaleLight, whitePaper } from "../../assetLibrary/colors";
import IconFormatter from "../Assets/IconFormatter";
import ButtonNav from "../Assets/ButtonNav";
import PartCard from "../PartCard";
import ModalButton from "../Modals/ModalButton";
import { ModalType } from "../../enums";

const DashboardAccordion = ({ records, parts, selected }) => {
  return (
    <Accordion allowMultiple w="100%" mb="100px">
      <Flex flexDir="column" alignItems="center">
        {records
          ? records.map((record) => {
              {
                // Filter per Partshouse Selected
                if (record.phId === selected._id) {
                  return (
                    <Flex
                      flexDir="row"
                      w="100%"
                      justifyContent="center"
                      key={record._id}
                    >
                      <AccordionSetup
                        record={record}
                        parts={parts}
                        key={record._id}
                      />
                    </Flex>
                  );
                }
              }
              {
                // Dashboard: All Records
                if (Object.keys(selected).length === 0) {
                  return (
                    <Flex
                      flexDir="row"
                      w="100%"
                      justifyContent="center"
                      key={record._id}
                    >
                      <AccordionSetup
                        record={record}
                        parts={parts}
                        key={record._id}
                      />
                    </Flex>
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
      maxW="800px"
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
          <IconFormatter icon={record.icon} size="8" />

          <Box as="span" flex="1" textAlign="left" pl="30px">
            {record.name}
          </Box>

          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} bg={whitePaper} borderRadius="15px" mt="5px">
        <Flex justifyContent="flex-end">
          <Box mr="2%">
            <ModalButton type={ModalType.ADD_Part} text="Add Part" recordId={record._id} />
          </Box>

          <ButtonNav route="/records/:<insertid>" text="More Details" />
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir={["column", "column", "column", "row"]}
        >
          {parts.map((part) => {
            if (part.recordId === record._id) {
              return <PartCard part={part} key={part._id} />;
            }
          })}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};
