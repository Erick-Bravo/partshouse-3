import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Assets/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { whitePaper } from "../assetLibrary/colors";
import NavInterface from "../components/NavInterface/NavInterface";
import { deletePH } from "../features/partshouse/phSlice";
import ModalButton from "../components/Modals/ModalButton";
import { ModalType } from "../enums";
import { getRecords } from "../features/records/recordSlice";

const EditPartshouses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { ph, isLoading, isError, message } = useSelector(
    (state) => state.partshouses
  );

  const { records } = useSelector((state) => state.records);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getPH());
      dispatch(getRecords())
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const countRecords = (phId) => {
    let count = 0;
    const message = "none";
    records.forEach((record) => {
      if (record.phId === phId) {
        count++;
      }
    });
    return count === 0 ? message : count;
  }

  return (
    <NavInterface>
      <Box borderRadius="10px" p={["30px 30px"]} h="99%">
        <Text fontStyle="italic" m="15px">
          Note: You will be unable to delete a Partshouse if it contains any
          Records
        </Text>

        <ModalButton type={ModalType.ADD_Partshouse} text="Add a Partshouse" />

        {ph.length > 0 ? (
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            color="black"
            p={["30px 0"]}
          >
            {ph.map((p) => (
              <Flex
              flexDir="column"
                key={p._id}
                bg={whitePaper}
                m="20px"
                p="20px"
                maxWidth={["600px"]}
                width="100%"
                borderRadius="10px"
              >
                <Text
                  fontWeight="bold"
                  fontSize={["20px", "30px"]}
                  pb={["3"]}
                  textAlign="center"
                >
                  {p.name}
                </Text>
                <Text pb={["5"]}>
                  Records: {countRecords(p._id)}
                </Text>
                <Flex justifyContent="center" alignItems="center">
                  <Button
                    bg={whitePaper}
                    mr={["9"]}
                    _hover={{
                      bg: "gray.200",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    bg={whitePaper}
                    onClick={() => dispatch(deletePH(p._id))}
                    _hover={{
                      bg: "gray.200",
                      cursor: "pointer",
                    }}
                    isDisabled={countRecords(p._id) !== "none"}
                  >
                    Delete
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Flex>
        ) : (
          <Text>You have not created any partshouses yet</Text>
        )}
      </Box>
    </NavInterface>
  );
};

export default EditPartshouses;
