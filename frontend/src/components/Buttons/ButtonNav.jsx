import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { blueWhaleLight, bgGrey, blueWhaleLight_Hover } from "../../assetLibrary/colors";

const ButtonNav = ({ route, text, size }) => {
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
      w="140px"
      size={size ? size : "md"} 
    >
      {text}
    </Button>
  );
};

export default ButtonNav;
