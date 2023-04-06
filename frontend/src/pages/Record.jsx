import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Assets/Spinner";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"; 
import Logo from "../components/Assets/Logo";
import ModalButton from "../components/Modals/ModalButton";
import HeadlineOne from "../components/Assets/HeadlineOne";
import { ModalType } from "../enums";
import { FiMenu } from "react-icons/fi";
import TopUserMenu from "../components/NavInterface/TopUserMenu";
import { blueWhale, toupOrange, whitePaper } from "../assetLibrary/colors";

const Record = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();

  useEffect(() => {
    // if (isError) {       - For error when record is not found
    //   console.log(message);
    // }
    if (!user) {
      navigate("/login");
    } else {
      
    }

    return () => {};
  }, [user, navigate, dispatch]);

  const goHome = () => {
    navigate("/");
  };

  // if (isLoading) {      - For record is when loading
  //   return <Spinner />;
  // }

  return (
    <Flex flexDir="column" w="100%">
      <Flex
        px={{ base: 4, md: 4 }}
        height="20"
        w="100%"
        alignItems="center"
        bg={useColorModeValue(blueWhale, whitePaper)}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        boxShadow="0 2px 8px -5px black"
      >

        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color={toupOrange}
          onClick={goHome}
        >
          Partshouse
        </Text>

        {/* TOP USER MENU */}
        <TopUserMenu />
      </Flex>
      <MoreDetails /> 
    </Flex>
  );
};

export default Record;


const MoreDetails = ({ record }) => {
  return (
    <Box h="100%" w="100%" bg={whitePaper}></Box>
  )
}