import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AddPartshouseModal from "../Modals/Add/AddPartshouseModal";
import { blueWhaleLight } from "../../assetLibrary/colors";
import AddRecordModal from "../Modals/Add/AddRecordModal";
import { ModalType } from "../../enums";
import AddPartModal from "../Modals/Add/AddPartModal";
import DeletePartModal from "../Modals/Delete/DeletePartModal";
import EditPartshouseModal from "../Modals/Edit/EditPartshouseModal";
import DeleteRecordModal from "../Modals/Delete/DeleteRecordModal";
import EditRecordModal from "../Modals/Edit/EditRecordModal";
import EditPartModal from "../Modals/Edit/EditPartModal";
import AddBuyURLModal from "../Modals/Add/AddBuyURLModal";
import AddLogModal from "../Modals/Add/AddLogModal";

const ModalButton = ({ type, text, recordId, partId, size, ph, bg, color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg={bg ? bg : blueWhaleLight}
        color={color ? color : "white"}
        _hover={{ color: color ? color : "white" }}
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
    case ModalType.ADD_BuyURL:
      return (
        <AddBuyURLModal isOpen={isOpen} onClose={onClose} partId={partId} />
      );
    case ModalType.ADD_Log:
      return (
        <AddLogModal isOpen={isOpen} onClose={onClose} recordId={recordId} />
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
    case ModalType.EDIT_Record:
      return <EditRecordModal isOpen={isOpen} onClose={onClose} />;
    case ModalType.EDIT_Part:
      return <EditPartModal isOpen={isOpen} onClose={onClose} />;
    default:
  }
};
