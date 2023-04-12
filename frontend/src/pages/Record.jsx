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
  blueWhaleLight,
  deleteButton,
  toupOrange,
  whitePaper,
} from "../assetLibrary/colors";
import { getRecordPage, reset } from "../features/records/recordSlice";
import ButtonNav from "../components/Assets/ButtonNav";
import IconFormatter from "../components/Assets/IconFormatter";
import ReBuyLogic from "../components/Buttons/ReBuyLogic";

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
        w="100%"
        alignItems="center"
        bg={blueWhale}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        boxShadow="0 2px 8px -5px black"
      >
        <TopUserMenu />
      </Flex>

      <Box bg={bgGrey} overflow="auto">
        {records.length > 0 && (
          <MoreDetails record={records[0].record} parts={records[0].parts} />
        )}
        {/* Do not delete */}
        <Box h="350px"></Box>
      </Box>
    </Flex>
  );
};

export default Record;

const MoreDetails = ({ record, parts }) => {
  return (
    <Flex
      p={["25px", "35px"]}
      flexDir="column"
      alignItems="center"
      h="120%"
      mb="150px" //{/* Do not delete */}
    >
      {record && (
        <>
          <Flex w="100%">
            <ButtonNav text="Back" route="/" />
          </Flex>

          <Flex
            borderRadius="15px"
            p={["25px"]}
            mt="35px"
            maxW="800px"
            minH="400px"
            w="100%"
            bg={whitePaper}
            flexDir="column"
          >
            <Box>
              <IconFormatter icon={record.icon} size="10" />
              <Headline text={record.name} type={HeadlineType.Two} />
            </Box>

            <Text fontWeight="bold">Brand: {record.brand}</Text>
            <Text>Model: {record.model}</Text>
            <Text>Serial: {record.serial}</Text>

            <Flex justifyContent="center" alignItems="center" h="100%">
              <Text>Logs go here</Text>
            </Flex>

            <Flex justifyContent="space-around">
              <Button bg={blueWhaleLight} color="white" size={["sm", "md"]}>
                Edit Record
              </Button>
              <Button bg="red.300" size={["sm", "md"]}>
                Delete Record
              </Button>
            </Flex>
          </Flex>
        </>
      )}

      {parts &&
        parts.map((part) => (
          <Flex
            borderRadius="15px"
            p={["25px"]}
            mt="35px"
            maxW="600px"
            w="100%"
            bg={whitePaper}
            flexDir="column"
            key={part._id}
          >
            <Flex
              pb="15px"
              justifyContent={["center", "space-between"]}
              flexDir={["column", "row"]}
            >
              <Box mb={["20px", "0"]}>
                <Headline type={HeadlineType.Three} text={part.name} />
              </Box>
              <Box>
                <Button size="sm" bg={blueWhaleLight} color="white" mr="10px">
                  Edit
                </Button>
                <Button size="sm" bg={deleteButton}>
                  Delete
                </Button>
              </Box>
            </Flex>

            <Text ml="10px" fontWeight="bold" fontSize="20px">
              Brand: {part.brand}
            </Text>

            <Text mb="20px" fontSize="20px">
              Price: ${part.price}
            </Text>
            {part.description && (
              <Text mb="20px">Description: {part.description}</Text>
            )}

            <ReBuyLogic part={part} />
          </Flex>
        ))}
    </Flex>
  );
};
