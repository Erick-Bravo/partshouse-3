import { useState } from "react";
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
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createPart } from "../../../features/parts/partSlice";

const AddPartModal = ({ recordId, isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [reBuyURL, setReBuyURL] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createPart({
        name,
        brand,
        description,
        price,
        reBuyURL,
        recordId,
      })
    );
    setName("");
    setBrand("");
    setDescription("");
    setPrice(0);
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
          <ModalHeader>Create Part</ModalHeader>
          <Text pl="30px" pb="40px">
            *You can edit on the "More Details" page
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isRequired
                mb={mbField}
              />
              <FormControl />
              <FormControl>
                <FormLabel>Brand</FormLabel>
                <Input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Brand Name"
                  mb={mbField}
                />
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="$"
                  mb={mbField}
                />
                <FormLabel>Re-Purchase URL</FormLabel>
                <Input
                  type="text"
                  value={reBuyURL}
                  onChange={(e) => setReBuyURL(e.target.value)}
                  placeholder="URL"
                  mb={mbField}
                />
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  mb={mbField}
                />
              </FormControl>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isDisabled={isError}
              colorScheme="blue"
              mr={3}
              onClick={onSubmit}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPartModal;
