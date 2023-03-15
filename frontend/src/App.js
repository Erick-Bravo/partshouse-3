import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { blueWhale } from "./assetLibrary/colors";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <ChakraProvider>
      <Router>
        <Box h="100vh" bg={blueWhale}>
          <Box h="100%" w="100%" m="0 auto" p="0 20px" textAlign="center">
            {/* <Navbar user={user} /> */}
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Box>
        </Box>
      </Router>
      <ToastContainer />
    </ChakraProvider>
  );
};

export default App;
