import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Assets/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavInterface from "../components/NavInterface/NavInterface";
import Logo from "../components/Assets/Logo";
import ModalButton from "../components/Modals/ModalButton";
import DashboardAccordion from "../components/NavInterface/DashboardAccordion";
import HeadlineOne from "../components/Assets/HeadlineOne";
import { getRecords } from "../features/records/recordSlice";
import { getParts } from "../features/parts/partSlice";
import { ModalType } from "../enums";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { ph, isLoading, isError, message } = useSelector(
    (state) => state.partshouses
  );

  const { records, isLoading: recordsLoading } = useSelector(
    (state) => state.records
  );

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
    <>
      <NavInterface>
        <Flex justifyContent="center" alignItems="center">
          {/* Partshouses available, but none selected */}
          {ph.length > 0 && Object.keys(selected).length === 0 && (
            <>
              <Box h="100%" w="100%">
                <HeadlineOne text="Dashboard" />
                <Text p="35px" h="100%">
                  All Records
                </Text>

                <ModalButton type={ModalType.ADD_Record} text="Add a Record" />

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
              <Box width={["600px"]}>
                <Logo />
                <ModalButton
                  text="Add a Partshouse"
                  type={ModalType.ADD_Partshouse}
                />
                <Text>
                  Click the "Add a Partshouse" button to create your first
                  Partshouse
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
              <HeadlineOne text={selected.name} />
              <Text p="35px" h="100%">
                {selected.name} Records
              </Text>
              <ModalButton type={ModalType.ADD_Record} text="Add a Record" />
              <DashboardAccordion
                records={records}
                parts={parts}
                selected={selected}
              />
            </Box>
          )}
        </Flex>
      </NavInterface>
    </>
  );
};

export default Home;
