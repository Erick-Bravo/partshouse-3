import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  VStack,
  Text,
  Box,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const TopUserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  const { user } = useSelector((state: any) => state.auth);

  const goToEditPartshouse = () => {
    navigate("/editpartshouses")
  };

  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        color="white"
        icon={<FiBell />}
      />
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm" color="white">
                  {user.email}
                </Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }} color="white">
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Add User</MenuItem>
            <MenuItem onClick={goToEditPartshouse}>Edit Partshouses</MenuItem>
            <MenuDivider />
            <MenuItem>Leave Feedback</MenuItem>
            <MenuDivider />
            <MenuItem onClick={onLogout}>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
};

export default TopUserMenu;