import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { blueWhale } from "./assetLibrary/colors";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box h="100vh" bg={blueWhale}>
          <Flex
            justifyContent="center"
            h="100%"
            w="100%"
            m="0 auto"
            p="0"
            textAlign="center"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Flex>
        </Box>
      </Router>
      <ToastContainer />
    </ChakraProvider>
  );
};

export default App;
