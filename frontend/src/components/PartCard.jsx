import {
  Box,
  Flex,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Button,
  Link,
} from "@chakra-ui/react";
import { blueWhaleLight, toupOrange } from "../assetLibrary/colors";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const PartCard = ({ part }) => {
  return (
    <Card w={["300px"]} minW={["250px"]} m="25px">
      <CardHeader>
        <Heading size="md">{part.name}</Heading>
      </CardHeader>

      <CardBody>
        <Box mb="30px">
          <Heading size="xs" textTransform="uppercase">
            price: ${part.price}
          </Heading>
        </Box>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            {part.reBuyURL ? (
              <Link
                href={part.reBuyURL}
                isExternal
                _hover={{ textDecorationLine: "none" }}
              >
                <Button
                  bg={blueWhaleLight}
                  color="white"
                  _hover={{ color: "white" }}
                >
                  Purchase
                  <ExternalLinkIcon ml="4px" />
                </Button>
              </Link>
            ) : (
              <Flex justifyContent="right">
                <Button
                  bg={toupOrange}
                  color="white"
                  _hover={{ color: "white" }}
                >
                  Add Buy Url
                </Button>
              </Flex>
            )}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PartCard;
