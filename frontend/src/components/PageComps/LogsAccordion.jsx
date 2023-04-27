import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import ModalButton from "../Buttons/ModalButton";
import { ModalType } from "../../enums";
import { useSelector } from "react-redux";

const LogsAccordion = () => {

  const { logs } = useSelector((state) => state.recordLogs);

  const f = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <Accordion allowMultiple m="20px 0">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" w="100px">
              Logs
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} w={["100%", "100%", "600px"]} textAlign="left">
          <Flex justifyContent="flex-end" m="25px 0">
            <ModalButton
              text="Add Log"
              size="sm"
              bg="gray.200"
              color="black"
              type={ModalType.ADD_Log}
            />
          </Flex>
          {logs.length === 0 && (
            <Text fontSize="sm" textAlign="center">
              No Logs
            </Text>
          )}
          {logs.map((log, i) => {
            if (i > 4) return;
            if (i < 3)
              return (
                <Box key={i} mb="20px">
                  <Text fontSize="sm" fontWeight="bold">
                    {f.format(new Date(log.createdAt))}
                  </Text>
                  <Text fontSize="sm">{log.log}</Text>
                </Box>
              );
          })}
          {logs.length > 4 && (
            <Flex justifyContent="flex-end" m="35px 0">
              <Button size="sm">See All Logs</Button>
            </Flex>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default LogsAccordion;
