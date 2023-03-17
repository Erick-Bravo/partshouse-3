import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PartshouseForm from "../components/PartshouseForm";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import Navbar from "../components/Navbar";
import PartshouseItem from "../components/PartshouseItem";
import { Box } from "@chakra-ui/react";
import { whitePaper } from "../assetLibrary/colors";

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
      <Box bg={whitePaper} borderRadius="10px" p={["0 0 30px"]} h="98%" w="100%" maxWidth={["1400px"]} >
      <Navbar user={user} />
        <section className="heading">
          <p>Partshouse Home</p>
        </section>
        <PartshouseForm />
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
    </>
  );
};

export default Home;
