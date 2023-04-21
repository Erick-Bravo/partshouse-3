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
import { updatePart } from "../../../features/parts/partSlice";
import { useDispatch, useSelector } from "react-redux";

const AddBuyURLModal = ({ isOpen, onClose, partId }) => {
  const [name, setName] = useState("");
  const [reBuyURL, setReBuyURL] = useState("");

  const { parts } = useSelector((state) => state.parts);
  const part = parts.find((part) => part._id === partId);

  const dispatch = useDispatch();

  useEffect(() => {
    setName(part.name);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updatePart({
        id: part._id,
        reBuyURL,
      })
    );
    setName("");
    setReBuyURL("");
    onClose();
  };

  const isError = name === "";

  const mbField = "15px";
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Part</ModalHeader>
          <ModalHeader>{part.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Re-Purchase URL</FormLabel>
              <Input
                type="text"
                value={reBuyURL}
                onChange={(e) => setReBuyURL(e.target.value)}
                placeholder="URL"
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
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddBuyURLModal;
