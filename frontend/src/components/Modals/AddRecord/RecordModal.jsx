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
  Select,
} from "@chakra-ui/react";
import { createRecord } from "../../../features/records/recordSlice";
import { useDispatch, useSelector } from "react-redux";

const RecordModal = ({ isOpen, onOpen, onClose }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [phId, setPhId] = useState("");

  console.log(phId);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createRecord({ name }));
    setName("");
    onClose();
  };

  const { ph } = useSelector((state) => state.partshouses);

  const isError = name === "" || icon === "" || phId === "";

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Record</ModalHeader>
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
              />
              <FormLabel>icon</FormLabel>
              <Input
                type="text"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
              />
              <FormLabel>Partshouse Association</FormLabel>
              <Select
                placeholder="Select Option"
                onChange={(e) => setPhId(e.target.value)}
              >
                {ph &&
                  ph.map((p) => (
                    <option value={p._id} key={p._id}>
                      {p.name}
                    </option>
                  ))}
              </Select>
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
                      />
                      <FormLabel>Model</FormLabel>
                      <Input
                        type="Model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Model #"
                      />
                      <FormLabel>Serial</FormLabel>
                      <Input
                        type="text"
                        value={serial}
                        onChange={(e) => setSerial(e.target.value)}
                        placeholder="Serial #"
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

export default RecordModal;
