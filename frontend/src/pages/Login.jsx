import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Assets/Spinner";
import {
  primary,
  primary2,
  toupOrange,
  whiteText,
} from "../assetLibrary/colors";
import { Button, Flex, Text, Box, Divider } from "@chakra-ui/react";
import Logo from "../components/Assets/Logo";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const userData = {
    email,
    password,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  const handleDemo = () => {
    dispatch(
      login({
        email: "test1@gmail.com",
        password: "password12",
      })
    );
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex h="100%" flexDirection={["column", "column", "column", "row"]}>
      <Logo />
      <Flex
        flexDirection="column"
        justifyContent="center"
        h="100%"
        pb="40px"
        w={["100%"]}
      >
        <section className="heading">
          <Text color={primary}>Login</Text>
          <Text color={whiteText} fontSize="20px">
            Please enter login info
          </Text>
        </section>
        <section className="form">
          <form className="form-group" onSubmit={onSubmit}>
            <div>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter a password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
          <Link to="/register">
            <Text color={toupOrange} _hover={{ color: primary2 }} mb="25px">
              Create an account
            </Text>
          </Link>
          <Divider />
          <Box mt="25px">
            <Text color={whiteText} fontSize="16px">
              Recruiters, click "demo"
            </Text>
            <Button onClick={handleDemo} w="150px" mt="10px">
              Demo
            </Button>
          </Box>
        </section>
      </Flex>
    </Flex>
  );
};

export default Login;
