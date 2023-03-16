import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { primary, primary2, blueWhaleLight } from "../assetLibrary/colors";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      boxShadow="0 8px 6px -6px black"
      borderRadius="0 0 10px 10px"
      mb="40px"
      bg={blueWhaleLight}
      className="header" //hilarious that i'm leaving this. A file with emotion styling would fix this.
    >
      <Box fontWeight="bold" fontSize="30px" color={primary}>
        <Link to="/">Partshouse</Link>
      </Box>
      <ul>
        {user ? (
          <>
            <Text color="white" fontWeight="bold">{user.email}</Text>
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
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <Text
                  fontWeight="bold"
                  color={primary}
                  _hover={{ color: primary2 }}
                >
                  Login
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <Text
                  fontWeight="bold"
                  color={primary}
                  _hover={{ color: primary2 }}
                >
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
