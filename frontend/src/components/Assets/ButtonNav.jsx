import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { blueWhaleLight, bgGrey, blueWhaleLight_Hover } from "../../assetLibrary/colors";

const ButtonNav = ({ route, text }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(route);
  };

  return (
    <Button
      bg={blueWhaleLight}
      color="white"
      _hover={{ color: "white", bg: blueWhaleLight_Hover }}
      onClick={onSubmit}
      minW="100px"
    >
      {text}
    </Button>
  );
};

export default ButtonNav;
