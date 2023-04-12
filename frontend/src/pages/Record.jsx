import { useEffect, useState } from "react";
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
  Button,
} from "@chakra-ui/react";
import Logo from "../components/Assets/Logo";
import ModalButton from "../components/Modals/ModalButton";
import Headline from "../components/Assets/Headline";
import { HeadlineType, ModalType } from "../enums";
import { FiMenu } from "react-icons/fi";
import TopUserMenu from "../components/NavInterface/TopUserMenu";
import {
  bgGrey,
  blueWhale,
  toupOrange,
  whitePaper,
} from "../assetLibrary/colors";
import { getRecordPage, reset } from "../features/records/recordSlice";
import ButtonNav from "../components/Assets/ButtonNav";

const Record = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { records, isLoading, isError, message } = useSelector(
    (state) => state.records
  );
  const { id } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getRecordPage(id));
    }

    return () => {};
  }, [user, navigate, dispatch]);

  const goHome = () => {
    reset();
    navigate("/");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex flexDir="column" w="100%">
      <Flex
        px={{ base: 4, md: 4 }}
        height="20"
        w="100%"
        alignItems="center"
        bg={blueWhale}
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

        <TopUserMenu />
      </Flex>
      <MoreDetails record={records[0].record} parts={records[0].parts} />
    </Flex>
  );
};

export default Record;

const MoreDetails = ({ record, parts }) => {
  return (
    <Flex h="100%" w="100%" bg={bgGrey} p={["25px", "35px"]} flexDir="column">
      <Flex>
        <ButtonNav text="Back" route="/" />
      </Flex>

      <Box border="1px solid black" borderRadius="15px" p={["15px"]}>
        <Headline text={record.name} type={HeadlineType.Two} />
      </Box>
    </Flex>
  );
};
