import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { primary, primary2 } from "../assetLibrary/colors";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex  h="100%">
      <Flex pl="50px" w={["100%", "50%"]}>
        <Image src="./PartshouseMain.svg"/>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        h="100%"
        pb="40px"
        w={["100%", "50%"]}
      >
        <section className="heading">
          <Text color={primary}>Login</Text>
          <Text fontSize="20px">Please enter login info</Text>
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
            <Text _hover={{ color: primary2 }}>create an account</Text>
          </Link>
        </section>
      </Flex>
    </Flex>
  );
};

export default Login;
