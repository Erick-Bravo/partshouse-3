import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import PartshouseModal from "../Modals/PartshouseModal";
import { blueWhaleLight } from "../../assetLibrary/colors";

const AddPhButton = () => {
  const {
    isOpen: isOpenPhModal,
    onOpen: onOpenPhModal,
    onClose: onClosePhModal,
  } = useDisclosure();
  return (
    <>
      <Button
        bg={blueWhaleLight}
        color="white"
        m={["30px 0"]}
        _hover={{ color: "white" }}
        onClick={onOpenPhModal}
      >
        Add a Partshouse
      </Button>
      <PartshouseModal
        isOpen={isOpenPhModal}
        onOpen={onOpenPhModal}
        onClose={onClosePhModal}
      />
    </>
  );
};

export default AddPhButton;

const SwitchModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
};
