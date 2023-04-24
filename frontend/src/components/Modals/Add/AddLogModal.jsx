import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import { createRecordLog } from "../../../features/recordLogs/recordLogsSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddLogModal = ({ isOpen, onClose }) => { 
  const [log, setLog] = useState("");

  const {id} = useParams();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createRecordLog({
        log,
        recordId: id,
      })
    );
    setLog("");
    onClose();
  };

  const isError = log === "";

  const mbField = "15px";
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Log</ModalHeader>
          <Text textAlign="center">Date will be added automatically</Text>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Log</FormLabel>
              <Input
                type="text"
                value={log}
                onChange={(e) => setLog(e.target.value)}
                placeholder="ex: changed filter, added oil, etc."
                mb={mbField}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isDisabled={isError}
              colorScheme="blue"
              mr={3}
              onClick={onSubmit}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddLogModal;
