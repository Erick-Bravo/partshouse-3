import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { blueWhale } from "./assetLibrary/colors";
import EditPartshouses from "./pages/EditPartshouses";
import Record from "./pages/Record";
import LeaveFeedback from "./pages/LeaveFeedback";
import Profile from "./pages/Profile";
import Splash from "./pages/Splash";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box>
          <Flex
            justifyContent="center"
            w="100%"
            m="0 auto"
            p="0"
            textAlign="center"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<Splash />} />
              <Route path="/register" element={<Register />} />
              <Route path="/editpartshouses" element={<EditPartshouses />} />
              <Route path="/records/:id" element={<Record />} />
              <Route path="/leavefeedback" element={<LeaveFeedback />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Flex>
        </Box>
      </Router>
      <ToastContainer />
    </ChakraProvider>
  );
};

export default App;
