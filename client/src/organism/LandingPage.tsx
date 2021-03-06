import {
  Text,
  Flex,
  Box,
  Button,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReduxState } from "../types/ReduxState";

export default function LandingPage() {
  const dispatch = useDispatch();

  const date = useSelector((state: ReduxState) => {
    const theDate = state.displayCategories.dashboardDate;
    return theDate.toISOString();
  });

  const userId = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });

  return (
    <Flex h="100%" direction="column" overflowY="auto" color="white">
      <Box align="center" boxsize={"420px"}>
        <Image
          src={
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          boxShadow="lg"
          w={{ base: "100vw", sm: "300px", md: "500px" }}
          h={{ base: "35vh", sm: "275px", md: "375px" }}
        />
      </Box>
      <Stack
        as={Box}
        textAlign="center"
        spacing={["8", "14"]}
        py={["12", "24"]}
      >
        <Heading
          fontWeight={700}
          fontSize={["2xl", "4xl", "4xl"]}
          lineHeight="110%"
          letterSpacing="wide"
        >
          Manage your finances <br />
          <Text color={"blue.400"} mt="10px" fontWeight="bold">
            together
          </Text>
        </Heading>
        <Text color={"gray.300"} fontWeight="500" px="1rem">
          Manage your finances from anywhere in the world. Link your finances
          together in a non-invasive way to get aggregate household data
        </Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme="blue"
            rounded="full"
            px={6}
            as={ReactLink}
            to="/login"
          >
            Get Started
          </Button>
          <Button
            variant="link"
            colorScheme="teal"
            size="sm"
            as={ReactLink}
            to="/info"
          >
            Learn more
          </Button>
          <Box>
            <Text
              fontSize="md"
              fontWeight="semi-bold"
              letterSpacing="wide"
              position="absolute"
              right="-110px"
              top="-15px"
              transform="rotate(10deg)"
            >
              Starting at ???25/mo
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
}
