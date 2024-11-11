import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Assets/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavInterface from "../components/NavInterface/NavInterface";
import Logo from "../components/Assets/Logo";
import ModalButton from "../components/Buttons/ModalButton";
import DashboardAccordion from "../components/NavInterface/DashboardAccordion";
import Headline from "../components/Assets/Headline";
import { getRecords } from "../features/records/recordSlice";
import { getParts } from "../features/parts/partSlice";
import { HeadlineType, ModalType } from "../enums";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { ph, isLoading, isError, message } = useSelector(
    (state) => state.partshouses
  );
  const { records } = useSelector((state) => state.records);
  const { parts } = useSelector((state) => state.parts);

  const { selected } = useSelector((state) => state.selectedPH);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getPH());
      dispatch(getRecords());
      dispatch(getParts());
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
        <Flex justifyContent="center" alignItems="center">
          {/* Partshouses available, but none selected */}
          {ph.length > 0 && Object.keys(selected).length === 0 && (
            <>
              <Box h="100%" w="100%">
                <Headline text="Dashboard" type={HeadlineType.One} /> 
                <Box m={["35px 0 70px 0"]}>
                  <ModalButton
                    type={ModalType.ADD_Record}
                    text="Add a Record"
                  />
                </Box>

                <DashboardAccordion
                  records={records}
                  parts={parts}
                  selected={{}}
                />
              </Box>
            </>
          )}
          {/* No Partshouses available */}
          {ph.length === 0 && (
            <>
              <Box width={["600px"]} mt={["0", "0", "0", "70px"]}>
                <Logo />
                <Box m={["30px 0"]}>
                  <ModalButton
                    text="Add a Partshouse"
                    type={ModalType.ADD_Partshouse}
                  />
                </Box>
                <Text>
                  Click the "Add a Partshouse" button to create your first
                  Partshouse!
                </Text>
                <Text>
                  Once created, to add more or edit, go to "Edit Parthouses" in
                  the top menu
                </Text>
              </Box>
            </>
          )}
          {/* Partshouse Selected */}
          {selected.name && (
            <Box h="100%" w="100%">
              <Headline text={selected.name} type={HeadlineType.One} />
              <Box m={["30px 0"]}>
                <ModalButton type={ModalType.ADD_Record} text="Add a Record" />
              </Box>
              <DashboardAccordion
                records={records}
                parts={parts}
                selected={selected}
              />
            </Box>
          )}
        </Flex>
      </NavInterface>
  );
};

export default Home;
