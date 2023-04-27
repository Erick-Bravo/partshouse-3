import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ShowAllLogsModal = ({ isOpen, onClose }) => {

  const { logs } = useSelector((state) => state.recordLogs);

  const f = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>All Logs</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowAllLogsModal;