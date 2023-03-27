import { ReactNode } from "react";
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
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import * as React from "react";
import { blueWhale, toupOrange } from "../../assetLibrary/colors";
import TopUserMenu from "./TopUserMenu";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedPH } from "../../app/selectedPH";

type ReactText = string | number;

const NavInterface = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //CHILDREN
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Box h="100vh" bg={useColorModeValue("gray.300", "gray.900")} w="100%">
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
      <Box ml={{ base: 0, md: 60 }} p="4" h="92%">
        {children}
      </Box>
    </Box>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

//SIDEBAR
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { ph } = useSelector((state: any) => state.partshouses);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const handlePHClick = (ph: any) => {
    dispatch(setSelectedPH(ph));
  }

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue(blueWhale, "gray.900")}
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
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {ph.map((ph: any) => (
        <NavItem
          key={ph.name}
          icon={ph.icon}
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

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
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
        {/* {icon && ( /////// We may want to use this if logos get integrated for a Partshouse
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )} */}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue(blueWhale, "gray.900")}
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
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color={toupOrange}
      >
        Partshouse
      </Text>

      {/* TOP USER MENU */}
      <TopUserMenu />
    </Flex>
  );
};

export default NavInterface;
