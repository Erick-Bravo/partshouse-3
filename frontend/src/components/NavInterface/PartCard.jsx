import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
} from "@chakra-ui/react";
import ReBuyLogic from "../Buttons/ReBuyLogic";

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

        <Stack spacing="4">
          <ReBuyLogic part={part} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PartCard;
