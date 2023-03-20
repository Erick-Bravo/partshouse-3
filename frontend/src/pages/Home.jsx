import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PartshouseForm from "../components/PartshouseForm";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import PartshouseItem from "../components/PartshouseItem";
import { Box, Text } from "@chakra-ui/react";
import { whitePaper } from "../assetLibrary/colors";
import NavInterface from "../components/NavInterface/NavInterface";

const Home = () => {
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
    <>
      <NavInterface>
        <Box
          bg={whitePaper}
          borderRadius="10px"
          p={["0 0 30px"]}
          h="98%"
          w="100%"
        >
          <section className="content">
          </section>
        </Box>
      </NavInterface>
    </>
  );
};

export default Home;
