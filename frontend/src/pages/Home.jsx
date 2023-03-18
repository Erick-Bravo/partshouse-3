import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PartshouseForm from "../components/PartshouseForm";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import Navbar from "../components/Navbar";
import PartshouseItem from "../components/PartshouseItem";
import { Box, Text } from "@chakra-ui/react";
import { whitePaper } from "../assetLibrary/colors";
import SidebarWithHeader from "../components/NavInterface/ExampleNavInterface";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <>
      <SidebarWithHeader>
        <Box
          bg={whitePaper}
          borderRadius="10px"
          p={["0 0 30px"]}
          h="98%"
          w="100%"
        >
          {/* <Navbar user={user} /> */}
          <Text></Text>
          {/* <PartshouseForm /> */}
          <section className="content">
            {ph.length > 0 ? (
              <Box className="goals">
                {ph.map((ph) => (
                  <PartshouseItem key={ph._id} ph={ph} />
                ))}
              </Box>
            ) : (
              <h3>You do not have any Partshouses yet</h3>
            )}
          </section>
        </Box>
      </SidebarWithHeader>
    </>
  );
};

export default Home;
