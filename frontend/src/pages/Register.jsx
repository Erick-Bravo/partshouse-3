import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Assets/Spinner";
import {
  Flex,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  primary,
  primary2,
  toupOrange,
  blueWhale,
  whiteText,
} from "../assetLibrary/colors";
import Logo from "../components/Assets/Logo";
// import { HeadlineType } from "../enums";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const [ok, setOk] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    } else {
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (!containsValidCharacters(password)) {
      toast.error(
        "Password must contain only letters, numbers, and special characters"
      );
      return;
    }
    if (!containsUpperCaseAndSymbol(password)) {
      toast.error(
        "Password must contain at least one uppercase letter and one special character"
      );
      return;
    }
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  const containsValidCharacters = (str) => {
    const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
    return regex.test(str);
  };

  const containsUpperCaseAndSymbol = (str) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
    return regex.test(str);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex
      h="100vh"
      flexDirection={["column", "column", "column", "row"]}
      bg={blueWhale}
    >
      <Box pt={["30%", "30%", "20%", "0"]}>
        <Logo objectFitValue={"contain"} />
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        h="100%"
        pb="40px"
        w={["100%"]}
      >
        <section className="heading">
          <Text color={primary}>Register</Text>
          <Text color={whiteText} fontSize="20px" mb="20px">
            Please create an account
          </Text>
          <Flex justifyContent="center">
            <UnorderedList w="300px" textAlign="left" pl="5%">
              <Text color={whiteText} fontSize="15px" as={null}>
                Password must contain:
              </Text>
              <ListItem color={whiteText} fontSize="15px">
                At least 6 characters
              </ListItem>
              <ListItem color={whiteText} fontSize="15px">
                At least one uppercase letter
              </ListItem>
              <ListItem color={whiteText} fontSize="15px">
                At least one special character
              </ListItem>
            </UnorderedList>
          </Flex>
        </section>

        <Flex w="100%" justifyContent="center" alignItems="center">
          <FormControl w="100%" maxW="500px">
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="white"
              placeholder="Enter Email"
              mb="10px"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="white"
              placeholder="Enter Password"
              mb="10px"
            />
            <Input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              bg="white"
              placeholder="Confirm Password"
              mb="10px"
            />
            <Button
              w="100%"
              bg="black"
              color="white"
              mb="20px"
              _hover={{ bg: "black" }}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </FormControl>
        </Flex>
        <Link to="/login">
          <Text color={toupOrange} _hover={{ color: primary2 }}>
            Already have an account?
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Register;
