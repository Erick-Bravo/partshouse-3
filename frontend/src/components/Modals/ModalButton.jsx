import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AddPartshouseModal from "./Add/AddPartshouseModal";
import { blueWhaleLight } from "../../assetLibrary/colors";
import AddRecordModal from "./Add/AddRecordModal";
import { ModalType } from "../../enums";
import AddPartModal from "./Add/AddPartModal";

const ModalButton = ({ type, text, recordId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg={blueWhaleLight}
        color="white"
        _hover={{ color: "white" }}
        onClick={onOpen}
      >
        {text}
      </Button>
      <SwitchModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        type={type}
        recordId={recordId}
      />
    </>
  );
};

export default ModalButton;

const SwitchModal = ({ type, isOpen, onOpen, onClose, recordId }) => {
  switch (type) {
    case ModalType.ADD_Partshouse:
      return (
        <AddPartshouseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      );
    case ModalType.ADD_Record:
      return <AddRecordModal isOpen={isOpen} onClose={onClose} />;
    case ModalType.ADD_Part:
      return (
        <AddPartModal isOpen={isOpen} onClose={onClose} recordId={recordId} />
      );
    default:
  }
};
