import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { primary, primary2 } from "../assetLibrary/colors";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="20px 20px"
      borderBottom="1px solid black"
      mb="60px"
      className="header" //hilarious that i'm leaving this. A file with emotion styling would fix this.
    >
      <Box fontWeight="bold" fontSize="30px" color={primary}>
        <Link to="/">Partshouse</Link>
      </Box>
      <ul>
        {user ? (
          <li>
            <Button
              onClick={onLogout}
              color="white"
              bg={primary}
              _hover={{ bg: primary2 }}
            >
             Logout
            </Button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <Text fontWeight="bold" color={primary}>
                  Login
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <Text fontWeight="bold" color={primary}>
                  Register
                </Text>
              </Link>
            </li>
          </>
        )}
      </ul>
    </Flex>
  );
};

export default Navbar;
