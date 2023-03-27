import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import { Box, Flex, Text } from "@chakra-ui/react";
import { whitePaper } from "../assetLibrary/colors";
import NavInterface from "../components/NavInterface/NavInterface";
import Logo from "../components/SplashPage/Logo";
import AddPhButton from "../components/Buttons/AddPhButton";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { ph, isLoading, isError, message } = useSelector(
    (state) => state.partshouses
  );

  const selected = useSelector((state) => state.selectedPH);

  console.log(selected);

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
    <>
      <NavInterface>
        <Flex
          justifyContent="center"
          alignItems="center"
          bg={whitePaper}
          borderRadius="10px"
          p={["0 0 30px"]}
          h="98%"
          w="100%"
        >
          {ph.length > 0 ? (
            <>
              <Flex h="100%" flexDir="column">
                <Text fontWeight="bold" fontSize="50px" pt="25px" h="100%">
                  Dashboard
                </Text>
                <Text pt="25px" h="100%">
                  This default home page should just display all records and parts. Create models and controllers before this step{" "}
                </Text>
              </Flex>
            </>
          ) : (
            <>
              <Box width={["600px"]}>
                <Logo />
                <AddPhButton />
                <Text>
                  Click the "Add a Partshouse" button to create your first
                  Partshouse
                </Text>
                <Text>
                  Once created, to add more or edit, go to "Edit Parthouse" in
                  the top menu
                </Text>
              </Box>
            </>
          )}
        </Flex>
      </NavInterface>
    </>
  );
};

export default Home;
