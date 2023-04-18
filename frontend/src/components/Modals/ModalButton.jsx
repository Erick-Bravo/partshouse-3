import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AddPartshouseModal from "./Add/AddPartshouseModal";
import { blueWhaleLight } from "../../assetLibrary/colors";
import AddRecordModal from "./Add/AddRecordModal";
import { ModalType } from "../../enums";
import AddPartModal from "./Add/AddPartModal";
import DeletePartModal from "./Delete/DeletePartModal";
import EditPartshouseModal from "./Edit/EditPartshouseModal";
import DeleteRecordModal from "./Delete/DeleteRecordModal";

const ModalButton = ({ type, text, recordId, partId, size, ph, bg }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg={bg ? bg : blueWhaleLight}
        color="white"
        _hover={{ color: "white" }}
        onClick={onOpen}
        size={size ? size : "md"}
      >
        {text}
      </Button>
      <SwitchModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        type={type}
        recordId={recordId}
        partId={partId}
        ph={ph}
      />
    </>
  );
};

export default ModalButton;

const SwitchModal = ({
  type,
  isOpen,
  onOpen,
  onClose,
  recordId,
  partId,
  ph,
}) => {
  switch (type) {
    case ModalType.ADD_Partshouse:
      return (
        <AddPartshouseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      );
    case ModalType.ADD_Record:
      return <AddRecordModal isOpen={isOpen} onClose={onClose} />;
    case ModalType.ADD_Part:
      return (
        // Needs recordId for association
        <AddPartModal isOpen={isOpen} onClose={onClose} recordId={recordId} />
      );
    case ModalType.DELETE_Record:
      return (
        <DeleteRecordModal
          isOpen={isOpen}
          onClose={onClose}
          recordId={recordId}
        />
      );
    case ModalType.DELETE_Part:
      // Needs partId for deletion
      return (
        <DeletePartModal isOpen={isOpen} onClose={onClose} partId={partId} />
      );
    case ModalType.EDIT_Partshouse:
      return <EditPartshouseModal isOpen={isOpen} onClose={onClose} ph={ph} />;
    default:
  }
};
