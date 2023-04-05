import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { blueWhaleLight } from "../../assetLibrary/colors";

const ButtonNav = ({ route, text }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(route);
  };

  return (
    <Button
      bg={blueWhaleLight}
      color="white"
      _hover={{ color: "white" }}
      onClick={onSubmit}
    >
      {text}
    </Button>
  );
};

export default ButtonNav;
