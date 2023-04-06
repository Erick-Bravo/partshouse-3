import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AddPartshouseModal from "./Add/AddPartshouseModal";
import { blueWhaleLight } from "../../assetLibrary/colors";
import AddRecordModal from "./Add/AddRecordModal";
import { ModalType } from "../../enums";
import AddPartModal from "./Add/AddPartModal";

const ModalButton = ({ type, text }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg={blueWhaleLight}
        color="white"
        m={["30px 0"]}
        _hover={{ color: "white" }}
        onClick={onOpen}
      >
        {text}
      </Button>
      <SwitchModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        modal={type}
      />
    </>
  );
};

export default ModalButton;

const SwitchModal = ({ modal, isOpen, onOpen, onClose }) => {
  switch (modal) {
    case ModalType.ADD_Partshouse:
      return (
        <AddPartshouseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      );
    case ModalType.ADD_Record:
      return <AddRecordModal isOpen={isOpen} onClose={onClose} />;
    case ModalType.ADD_Part:
      return <AddPartModal isOpen={isOpen} onClose={onClose} />;
    default:
  }
};
