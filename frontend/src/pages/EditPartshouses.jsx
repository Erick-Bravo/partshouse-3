import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PartshouseForm from "../components/PartshouseForm";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import PartshouseItem from "../components/PartshouseItem";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { buttonColor, whitePaper } from "../assetLibrary/colors";
import NavInterface from "../components/NavInterface/NavInterface";

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
      <Box bg={whitePaper} borderRadius="10px" p={["30px 30px"]} h="98%">
        <Text fontStyle="italic">
          Note: You will be unable to delete a Partshouse if they contain any
          Records
        </Text>
        {ph.length > 0 ? (
          ph.map((p) => (
            <Flex flexDir="column" color="black" pt={["10"]}>
              <Text fontWeight="bold" fontSize={["30px"]}>
                {p.name}
              </Text>
              <Text pb={["5"]}>
                Number of Records: {p.length ? p.length : "No Records"}
              </Text>

              <Flex justifyContent="center">
                <Button
                  mr={["9"]}
                  _hover={{
                    bg: buttonColor,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </Button>
                <Button
                  _hover={{
                    bg: buttonColor,
                    color: "white",
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
