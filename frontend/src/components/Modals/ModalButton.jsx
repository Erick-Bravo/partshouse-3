import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import PartshouseModal from "./PartshouseModal";
import { blueWhaleLight } from "../../assetLibrary/colors";
import RecordModal from "./AddRecord/RecordModal";
import { ModalType } from "../../enums";

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
    case ModalType.Partshouse:
      return (
        <PartshouseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      );
    case ModalType.Record:
      return <RecordModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />;
    default:
  }
};
