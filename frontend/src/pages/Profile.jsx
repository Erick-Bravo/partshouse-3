import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Assets/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavInterface from "../components/NavInterface/NavInterface";
import Logo from "../components/Assets/Logo";
import ModalButton from "../components/Buttons/ModalButton";
import Headline from "../components/Assets/Headline";
import { HeadlineType, ModalType } from "../enums";

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

   </NavInterface>
  )
}

export default Profile;