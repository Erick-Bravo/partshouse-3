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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { createRecord } from "../../../features/records/recordSlice";
import { useDispatch } from "react-redux";

const AddPartModal = ({recordId, isOpen, onClose,}) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createRecord({ name, brand, model, serial, description })
    );
    setName("");
    setBrand("");
    setModel("");
    setSerial("");
    setDescription("");
    onClose();
  };

  const isError = name === ""  ;

  const mbField = "15px";
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Part</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Printer/Air Conditioner/Refrigerator..."
                isRequired
                mb={mbField}
              />
              <FormControl />
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize="14px"
                        fontWeight="bold"
                        mt="15px"
                      >
                        Advanced
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <FormControl>
                      <FormLabel>Brand</FormLabel>
                      <Input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="Brand Name"
                        mb={mbField}
                      />
                      <FormLabel>Model</FormLabel>
                      <Input
                        type="Model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Model #"
                        mb={mbField}
                      />
                      <FormLabel>Serial</FormLabel>
                      <Input
                        type="text"
                        value={serial}
                        onChange={(e) => setSerial(e.target.value)}
                        placeholder="Serial #"
                        mb={mbField}
                      />
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
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
