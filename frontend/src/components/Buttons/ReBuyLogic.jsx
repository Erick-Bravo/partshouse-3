import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { blueWhaleLight, toupOrange } from "../../assetLibrary/colors";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
        <Button bg={toupOrange} color="white" _hover={{ color: "white" }}>
          Add Buy Url
        </Button>
      )}
    </Box>
  );
};

export default ReBuyLogic;
