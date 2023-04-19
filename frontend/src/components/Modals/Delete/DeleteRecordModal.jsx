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
import { useNavigate, useParams } from "react-router-dom";
import { deleteRecord } from "../../../features/records/recordSlice";

const DeleteRecordModal = ({ recordId, isOpen, onClose }) => {
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteRecord(id));
    navigate("/");
    onClose();
  };

  const isError = deleteConfirm.toLocaleLowerCase() !== "delete";

  const mbField = "15px";
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Record Delete</ModalHeader>
        <ModalHeader>
          Warning: Deleting this record will also delete ALL associated parts
        </ModalHeader>
        <Text p="30px">*To delete record, type "delete" in the box below.</Text>
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
