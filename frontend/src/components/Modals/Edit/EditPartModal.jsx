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

const EditPartModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [reBuyURL, setReBuyURL] = useState("");

    const { part } = useSelector((state) => state.selectedPart);
  
    const dispatch = useDispatch();

    useEffect(() => {
      setName(part.name);
      setBrand(part.brand);
      setDescription(part.description);
      setPrice(part.price);
      setReBuyURL(part.reBuyURL);
    }, []);
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      dispatch(
        updatePart({
          name,
          brand,
          description,
          price,
          reBuyURL,
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
            <ModalHeader>Update Part</ModalHeader>
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
                Update
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
};

export default EditPartModal;