import React, { useState, useEffect } from "react";
import {
  Box,
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
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { createPH } from "../../../features/partshouse/phSlice";
import { useDispatch } from "react-redux";

const EditPartshouseModal = ({ph, isOpen, onClose }) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
   setName(ph.name);
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createPH({ name }));
    setName("");
    onClose();
  };

  const isError = name === "";

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Partshouse</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Home/Office/Apartment..."
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
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPartshouseModal;