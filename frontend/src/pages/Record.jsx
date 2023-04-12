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
import HeadlineOne from "../components/Assets/HeadlineOne";
import { ModalType } from "../enums";
import { FiMenu } from "react-icons/fi";
import TopUserMenu from "../components/NavInterface/TopUserMenu";
import {
  bgGrey,
  blueWhale,
  toupOrange,
  whitePaper,
} from "../assetLibrary/colors";
import { getRecordPage, reset } from "../features/records/recordSlice";

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
      <MoreDetails
        record={records.record}
        parts={records.parts}
        goHome={goHome}
      />
    </Flex>
  );
};

export default Record;

const MoreDetails = ({ record, parts, goHome }) => {
  return (
    <Flex h="100%" w="100%" bg={bgGrey} p={["25px", "35px"]}>
      <Button w="120px" onClick={goHome}>
        Back
      </Button>
    </Flex>
  );
};
