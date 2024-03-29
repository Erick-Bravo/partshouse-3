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
  IconButton,
} from "@chakra-ui/react";
import { updateRecord } from "../../../features/records/recordSlice";
import { useDispatch, useSelector } from "react-redux";

import { iconList } from "../../Assets/IconFormatter";
import { getPH } from "../../../features/partshouse/phSlice";

const EditRecordModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [phId, setPhId] = useState("");

  const dispatch = useDispatch();

  const { ph } = useSelector((state) => state.partshouses);
  const { records } = useSelector((state) => state.records);

  const record = records[0];

  useEffect(() => {
    dispatch(getPH());
    setName(record.name);
    setBrand(record.brand);
    setModel(record.model);
    setSerial(record.serial);
    setIcon(record.icon);
    setDescription(record.description);
    setPhId(record.phId);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const recordData = {
      id: record._id,
      name,
      brand,
      model,
      serial,
      icon,
      description,
      phId,
    };

    dispatch(updateRecord(recordData));
    setName("");
    setBrand("");
    setModel("");
    setSerial("");
    setIcon("");
    setDescription("");
    setPhId("");
    onClose();
  };

  const isError = name === "" || icon === "" || phId === "";

  const mbField = "15px";

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
                mb={mbField}
              />
              <FormLabel>Icon</FormLabel>
              <Accordion allowMultiple mb={mbField}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize="16px"
                        fontWeight="bold"
                        mt="15px"
                      >
                        Select Icon
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {iconList.map((iconItem) => (
                      <IconButton
                        icon={iconItem.icon}
                        key={iconItem.name}
                        h="50px"
                        w="50px"
                        fontSize="25px"
                        m="5px"
                        colorScheme={icon === iconItem.name ? "blue" : "gray"}
                        onClick={() => setIcon(iconItem.name)}
                      />
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <FormLabel>Partshouse Association</FormLabel>
              <Select
                placeholder="Select Partshouse"
                onChange={(e) => setPhId(e.target.value)}
                mb={mbField}
                defaultValue={phId}
              >
                {ph &&
                  ph.map((p) => (
                    <option key={p._id} value={p._id}>
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
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditRecordModal;
