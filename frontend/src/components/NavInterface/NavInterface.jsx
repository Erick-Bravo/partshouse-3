import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import * as React from "react";
import {
  bgGrey,
  blueWhale,
  toupOrange,
  whitePaper,
} from "../../assetLibrary/colors";
import TopUserMenu from "./TopUserMenu";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetSelectedPH, setSelectedPH } from "../../app/selectedPH";


// type ReactText = string | number;

const NavInterface = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //CHILDREN
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Box
      h="100vh"
      bg={useColorModeValue(bgGrey, "gray.900")}
      w="100%"
      position="fixed"
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" h="92%" overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

//SIDEBAR
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const SidebarContent = ({ onClose, ...rest }) => {
  const { ph } = useSelector((state) => state.partshouses);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    dispatch(resetSelectedPH());
  };

  const handlePHClick = (ph) => {
    navigate("/");
    dispatch(setSelectedPH(ph));
    onClose();
  };

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue(blueWhale, whitePaper)}
      borderRight="1px"
      // borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="3xl"
          fontFamily="monospace"
          fontWeight="bold"
          color={toupOrange}
          onClick={goHome}
          _hover={{ cursor: "pointer" }}
        >
          Partshouse
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} color={toupOrange} />
      </Flex>
      <NavItem color={toupOrange} fontSize="2xl" onClick={() => goHome()}>
        Dashboard
      </NavItem>
      {ph.map((ph) => (
        <NavItem
          key={ph.name}
          color={toupOrange}
          fontSize="2xl"
          onClick={() => handlePHClick(ph)}
        >
          {ph.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    dispatch(resetSelectedPH());
  };
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue(blueWhale, whitePaper)}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      boxShadow="0 2px 8px -5px black"
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
        color={toupOrange}
        borderColor={toupOrange}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color={toupOrange}
        onClick={goHome}
      >
        Partshouse
      </Text>

      {/* TOP USER MENU */}
      <TopUserMenu />
    </Flex>
  );
};

export default NavInterface;
