import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import {
  blueWhaleLight,
  buttonColor,
  whitePaper,
} from "../assetLibrary/colors";
import NavInterface from "../components/NavInterface/NavInterface";
import { deletePH } from "../features/partshouse/phSlice";

const EditPartshouses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { ph, isLoading, isError, message } = useSelector(
    (state) => state.partshouses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getPH());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <NavInterface>
      <Box bg={whitePaper} borderRadius="10px" p={["30px 30px"]} h="99%">
        <Text fontStyle="italic">
          Note: You will be unable to delete a Partshouse if it contain any
          Records
        </Text>
        <Button
          bg={blueWhaleLight}
          color="white"
          m={["30px 0"]}
          _hover={{ color: "white" }}
        >
          Add a Partshouse
        </Button>
        {ph.length > 0 ? (
          ph.map((p) => (
            <Flex flexDir="column" color="black" p={["30px 0"]}>
              <Text fontWeight="bold" fontSize={["30px"]} pb={["3"]}>
                {p.name}
              </Text>
              <Text pb={["5"]}>
                Number of Records: {p.length ? p.length : "No Records"}
              </Text>

              <Flex justifyContent="center">
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
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          ))
        ) : (
          <Text>You have not created any partshouses yet</Text>
        )}
      </Box>
    </NavInterface>
  );
};

export default EditPartshouses;
