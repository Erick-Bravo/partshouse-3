import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavInterface from "../components/NavInterface/NavInterface";
import Logo from "../components/SplashPage/Logo";
import AddPhButton from "../components/Buttons/AddPhButton";
import DashboardAccordion from "../components/DashboardAccordion";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { ph, isLoading, isError, message } = useSelector(
    (state) => state.partshouses
  );

  const { selected } = useSelector((state) => state.selectedPH);

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
        >
          {ph.length > 0 && selected !== {} ? (
            <>
              <Box h="100%">
                <Text fontWeight="bold" fontSize="50px" pt="25px">
                  Dashboard
                </Text>
                <Text pt="25px" h="100%">
                  All Records
                </Text>

                <DashboardAccordion />
              </Box>
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
