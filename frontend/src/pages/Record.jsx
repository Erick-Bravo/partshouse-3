import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Assets/Spinner";
import { Box, Flex, Text } from "@chakra-ui/react";
import ModalButton from "../components/Buttons/ModalButton";
import Headline from "../components/Assets/Headline";
import { HeadlineType, ModalType } from "../enums";
import TopUserMenu from "../components/NavInterface/TopUserMenu";
import {
  bgGrey,
  blueWhale,
  deleteButton,
  whitePaper,
  toupOrange,
} from "../assetLibrary/colors";
import { getRecord } from "../features/records/recordSlice";
import ButtonNav from "../components/Buttons/ButtonNav";
import IconFormatter from "../components/Assets/IconFormatter";
import ReBuyLogic from "../components/Buttons/ReBuyLogic";
import { getRecordParts } from "../features/parts/partSlice";
import { setSelectedPart } from "../app/selectedPart";
import LogsAccordion from "../components/PageComps/LogsAccordion";

const Record = () => {
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

  const goHome = () => {
    navigate("/");
  };

  return (
    <Flex flexDir="column" w="100%">
      <Flex
        px={{ base: 4, md: 4 }}
        w="100%"
        h="125px"
        alignItems="center"
        bg={blueWhale}
        justifyContent={"space-between"}
        boxShadow="0 2px 8px -5px black"
      >
        <Text
          fontSize={["2xl", "3xl"]}
          fontFamily="monospace"
          fontWeight="bold"
          color={toupOrange}
          onClick={goHome}
        >
          Partshouse
        </Text>
        <TopUserMenu />
      </Flex>

      <Box bg={bgGrey} overflow="auto">
        {records && <MoreDetails record={records[0]} parts={parts} />}
        {/* Do not delete */}
        {/* <Box h="350px"></Box> */}
      </Box>
    </Flex>
  );
};

export default Record;

const MoreDetails = ({ record, parts }) => {
  const dispatch = useDispatch();

  const handlePartClick = (part) => {
    dispatch(setSelectedPart(part));
  };

  return (
    <Flex
      p={["25px", "35px"]}
      flexDir="column"
      alignItems="center"
      mb="150px" //{/* Do not delete */}
    >
      {record && (
        <>
          <Flex w="100%" justifyContent="space-between">
            <ButtonNav text="Back" route="/" size={["sm", "md"]} />
            <ModalButton
              bg={deleteButton}
              text="Delete Record"
              type={ModalType.DELETE_Record}
              size={["sm", "md"]}
            />
          </Flex>

          <Flex
            borderRadius="15px"
            p={["25px"]}
            mt="35px"
            maxW="800px"
            minH="400px"
            w="100%"
            h="100%"
            bg={whitePaper}
            flexDir="column"
            justifyContent="space-between"
          >
            <Box>
              <IconFormatter icon={record.icon} size="10" />
              <Headline text={record.name} type={HeadlineType.Two} />
              <Text fontWeight="bold">Brand: {record.brand}</Text>
              <Text>Model: {record.model}</Text>
              <Text>Serial: {record.serial}</Text>
            </Box>

            <Flex justifyContent="center" alignItems="center" h="100%">
              <LogsAccordion />
            </Flex>

            <Box>
              <ModalButton
                text="Edit Record"
                type={ModalType.EDIT_Record}
                record={record}
              />
            </Box>
          </Flex>

          <Box m={["45px"]}>
            <ModalButton
              type={ModalType.ADD_Part}
              text="Add Part"
              recordId={record._id}
            />
          </Box>
        </>
      )}

      {parts &&
        parts.map((part) => (
          <Flex
            key={part._id}
            w="100%"
            mb="40px"
            maxW="500px"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Flex
              flexDir="column"
              alignItems="center"
              borderRadius="15px"
              p={["25px"]}
              maxW="500px"
              w="100%"
              bg={whitePaper}
            >
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
              <Box mr="5px" onClick={handlePartClick(part)}>
                <ModalButton
                  text="Edit Part"
                  type={ModalType.EDIT_Part}
                  size="sm"
                  partId={part._id}
                />
              </Box>
              <ModalButton
                text="Delete"
                type={ModalType.DELETE_Part}
                partId={part._id}
                size="sm"
              />
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};
