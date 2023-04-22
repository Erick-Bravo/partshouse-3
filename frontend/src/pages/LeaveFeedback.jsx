import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Headline from "../components/Assets/Headline";
import TopUserMenu from "../components/NavInterface/TopUserMenu";
import { HeadlineType } from "../enums";
import {
  bgGrey,
  blueWhale,
  whitePaper,
  toupOrange,
  blueWhaleLight,
} from "../assetLibrary/colors";
import ButtonNav from "../components/Buttons/ButtonNav";
import { useSelector, useDispatch } from "react-redux";
import { createFeedback } from "../features/feedback/feedbackSlice";

const LeaveFeedback = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Flex flexDir="column" w="100%">
      <Flex
        px={{ base: 4, md: 4 }}
        w="100%"
        h="88px"
        alignItems="center"
        bg={blueWhale}
        justifyContent={"space-between"}
        boxShadow="0 2px 8px -5px black"
      >
        <Text
          fontSize={["2xl", "3xl"]}
          fontFamily="monospace"
          fontWeight="bold"
          color={toupOrange}
          onClick={goHome}
        >
          Partshouse
        </Text>
        <TopUserMenu />
      </Flex>

      <Box bg={bgGrey} overflow="auto" h="100%">
        <FeedbackSection />
      </Box>
    </Flex>
  );
};

export default LeaveFeedback;

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");
  const [iconSuggestion, setIconSuggestion] = useState("");

  const { email } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const feedbackData = {
      email,
      feedback,
      iconSuggestion,
    };
    dispatch(createFeedback(feedbackData));
  };

  return (
    <Flex flexDir="column" alignItems="center" p={["25px", "35px"]} w="100%">
      <Flex justifyContent="flex-start" w="100%">
        <ButtonNav text="Back" route="/" size={["sm", "md"]} />
      </Flex>

      <Flex
        w="100%"
        m={["40px 0"]}
        borderRadius="10px"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Headline type={HeadlineType.One} text="Leave Feedback" />
        <Text>
          By leaving feedback, you become a contributor to the growth of this
          app.
        </Text>
        <Text>Thank you</Text>

        <Box w="100%" maxW="500px">
          <FormControl w="100%">
            <FormLabel mt="50px">Feedback</FormLabel>
            <Textarea
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              bg="white"
            />
            <FormLabel mt="50px">Icon Suggestion</FormLabel>
            <Input
              type="text"
              value={iconSuggestion}
              onChange={(e) => setIconSuggestion(e.target.value)}
              bg="white"
            />
          </FormControl>

          <Flex justifyContent="flex-end" mt="20px">
            <Button colorScheme="blue" mr={3} onClick={onSubmit}>
              Create
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
