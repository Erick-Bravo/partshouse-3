import { useState } from "react";
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
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deletePart } from "../../../features/parts/partSlice";

const DeletePartModal = ({ partId, isOpen, onClose }) => {
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(deletePart(partId));
    onClose();
  };

  const isError = deleteConfirm.toLocaleLowerCase() !== "delete";

  const mbField = "15px";
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Part Delete</ModalHeader>
        <Text pl="30px" pb="40px">
          *To delete part, type "delete" in the box below.
        </Text>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <Input
              type="text"
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              isRequired
              mb={mbField}
            />
            <FormControl />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            isDisabled={isError}
            colorScheme="red"
            mr={3}
            onClick={onSubmit}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeletePartModal;
