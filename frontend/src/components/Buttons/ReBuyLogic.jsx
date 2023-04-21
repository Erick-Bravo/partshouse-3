import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { blueWhaleLight, toupOrange } from "../../assetLibrary/colors";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ModalType } from "../../enums";
import ModalButton from "../Modals/ModalButton";

const ReBuyLogic = ({ part }) => {
  return (
    <Box>
      {part.reBuyURL ? (
        <Link
          href={part.reBuyURL}
          isExternal
          _hover={{ textDecorationLine: "none" }}
        >
          <Button bg={blueWhaleLight} color="white" _hover={{ color: "white" }}>
            Purchase
            <ExternalLinkIcon ml="4px" />
          </Button>
        </Link>
      ) : (
        <ModalButton
          text="Add Buy URL"
          type={ModalType.ADD_BuyURL}
          bg={toupOrange}
          size="sm"
          partId={part._id}
        />
      )}
    </Box>
  );
};

export default ReBuyLogic;
