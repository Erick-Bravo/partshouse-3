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
import { getRecord, reset } from "../features/records/recordSlice";
import ButtonNav from "../components/Assets/ButtonNav";
import IconFormatter from "../components/Assets/IconFormatter";
import ReBuyLogic from "../components/Buttons/ReBuyLogic";
import { getRecordParts } from "../features/parts/partSlice";

const Record = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { records, isLoading, isError, message } = useSelector(
    (state) => state.records
  );
  const { parts } = useSelector((state) => state.parts);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getRecord(id));
      dispatch(getRecordParts(id));
    }

    return () => {};
  }, [user, navigate, dispatch]);

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
        {records && <MoreDetails record={records[0]} parts={parts} />}
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
              <Button bg="red.300" size={["sm", "md"]} color="white">
                Delete Record
              </Button>
            </Flex>
          </Flex>

          <ModalButton
            type={ModalType.ADD_Part}
            text="Add Part"
            recordId={record._id}
          />
        </>
      )}

      {parts &&
        parts.map((part) => (
          <Box
            key={part._id}
            borderRadius="15px"
            p={["25px"]}
            mt="35px"
            maxW="600px"
            w="100%"
            bg={whitePaper}
          >
            <Flex flexDir="column">
              <Flex
                pb="15px"
                justifyContent={["center", "space-between"]}
                flexDir={["column", "row"]}
              >
                <Box mb={["20px", "0"]}>
                  <Headline type={HeadlineType.Three} text={part.name} />
                </Box>
                <Box></Box>
              </Flex>

              <Text mb="20px" fontSize="20px">
                Price: ${part.price}
              </Text>
              {part.brand && (
                <Text ml="10px" fontWeight="bold" fontSize="16px">
                  Brand: {part.brand}
                </Text>
              )}
              {part.description && (
                <Text mb="20px">Description: {part.description}</Text>
              )}

              <ReBuyLogic part={part} />
            </Flex>
            <Flex
              justifyContent={["center", "flex-end"]}
              maxW="600px"
              w="100%"
              m="10px"
            >
              <Button bg={blueWhaleLight} color="white" size="sm" mr="5px">
                Edit Part
              </Button>
              <ModalButton
                text="Delete"
                type={ModalType.DELETE_Part}
                partId={part._id}
                size="sm"
              />
            </Flex>
          </Box>
        ))}
    </Flex>
  );
};
