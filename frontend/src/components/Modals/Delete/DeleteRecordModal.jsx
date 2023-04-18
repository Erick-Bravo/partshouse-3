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
// import { deleteRecord } from "../../../features/records/partSlice";
import Headline from "../../Assets/Headline";
import { HeadlineType } from "../../../enums";

const DeleteRecordModal = ({ recordId, isOpen, onClose }) => {
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    // dispatch(deleteRecord(recordId));
    onClose();
  };

  const isError = deleteConfirm.toLocaleLowerCase() !== "delete";

  const mbField = "15px";
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Record Delete</ModalHeader>
        <ModalHeader>Deleting this record will also delete ALL associated parts</ModalHeader>
        <Text p="30px">
          *To delete record with all associated parts, type "delete" in the box below.
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

export default DeleteRecordModal;