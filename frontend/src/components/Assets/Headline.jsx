import { Text } from "@chakra-ui/react";
import { HeadlineType } from "../../enums";

const Headline = ({ text, type }) => {
  let fontSize = "0";
  let pt = "0";

  if (type === HeadlineType.One) {
    fontSize = "50px";
    pt = "25px";
  }
  if (type === HeadlineType.Two) {
    fontSize = "30px";
    pt = "15px";
  }
  if (type === HeadlineType.Three) {
    fontSize = "20px";
    pt = "10px";
  }

  return (
    <Text fontWeight="bold" fontSize={fontSize} pt={pt}>
      {text}
    </Text>
  );
};

export default Headline;
