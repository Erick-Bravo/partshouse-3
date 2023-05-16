import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Assets/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import NavInterface from "../components/NavInterface/NavInterface";
import Logo from "../components/Assets/Logo";
import ModalButton from "../components/Buttons/ModalButton";
import Headline from "../components/Assets/Headline";
import { HeadlineType, ModalType } from "../enums";
import { whitePaper } from "../assetLibrary/colors";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
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
      <Box borderRadius="10px" p={["30px 30px"]} h="99%">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          color="black"
          p={["30px 0"]}
        >
          <Flex
            flexDir="column"
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
              Account Info
            </Text>

            <Box m="20px">
              <Text textAlign="left">email: {user.email} </Text>
              <Text textAlign="left">password: ******** </Text>
            </Box>
            <Flex justifyContent="end">
              <Button>Update</Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </NavInterface>
  );
};

export default Profile;
