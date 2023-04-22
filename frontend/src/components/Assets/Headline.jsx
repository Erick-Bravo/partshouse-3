import { Text } from "@chakra-ui/react";
import { HeadlineType } from "../../enums";

const Headline = ({ text, type }) => {
  let fontSize = "0";
  let mobile = "0";
  let pt = "0";

  if (type === HeadlineType.One) {
    fontSize = "50px";
    mobile = "40px";
    pt = "25px";
  }
  if (type === HeadlineType.Two) {
    fontSize = "30px";
    mobile = "20px"
    pt = "15px";
  }
  if (type === HeadlineType.Three) {
    fontSize = "20px";
    mobile = "15px"
    pt = "10px";
  }

  return (
    <Text fontWeight="bold" fontSize={[mobile, fontSize]} pt={pt}>
      {text}
    </Text>
  );
};

export default Headline;
