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
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    navigate("/");
    dispatch(reset());
  };
  const { user } = useSelector((state) => state.auth);

  const goToEditPartshouse = () => {
    navigate("/editpartshouses");
  };

  const goToLeaveFeedback = () => {
    navigate("/leavefeedback");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <HStack spacing={{ base: "4", md: "6" }}>
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        color="white"
        icon={<FiBell />}
      />
      <Flex alignItems={"center"} justifyContent={["flex-end"]}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              {/* <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              /> */}
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                {user !== null && (
                  <Text fontSize="sm" color="white">
                    {user.email}
                  </Text>
                )}
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
            <MenuItem onClick={goToProfile}>Profile</MenuItem>
            <MenuItem onClick={goToEditPartshouse}>Edit Partshouses</MenuItem>
            <MenuDivider />
            <MenuItem onClick={goToLeaveFeedback}>Leave Feedback</MenuItem>
            <MenuDivider />
            <MenuItem onClick={onLogout}>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
};

export default TopUserMenu;
