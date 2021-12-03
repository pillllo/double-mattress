import { Box, VStack, Flex, Text, Icon } from "@chakra-ui/react";
import { FaAddressBook, FaDollarSign, FaFastForward } from "react-icons/fa";

export default function InfoPage() {
  const data = [
    {
      icon: FaAddressBook,
      title: "Couples Financial Management",
      content:
        "Manage your finances with (or without) your partner in one easy-to-use app. Allowing the tracking and viewing of important info & spending based on categories",
      color: "blue.400",
    },
    {
      icon: FaDollarSign,
      title: "Savings",
      content:
        "Track and view your savings throughout the years, viewing important info such as Amount Saved Per Month, Average Monthly Savings and Projected Savings",
      color: "green.400",
    },
    {
      icon: FaFastForward,
      title: "Projections",
      content:
        "Take a peek into the future to see your financial standing based on aggregate data. How is that dream holiday to the Maldives going to affect your financial standing? Find out in the Projections section",
    },
  ];

  return (
    <Box p="4" overflowY="auto" h="90%">
      <Flex direction="column">
        {data.map((indiv, i) => {
          return (
            <VStack key={i} bg="gray.800" my="2rem" p={5} rounded="2xl">
              <Flex w="14" h="14" aling="center" justify="center">
                <Icon as={indiv.icon} w={10} h={10} color={indiv.color} />
              </Flex>
              <Text
                fontWeight="700"
                letterSpacing="wide"
                fontSize="18"
                align="center"
              >
                {indiv.title}
              </Text>
              <Text align="center" fontWeight="500" fontSize="14">
                {indiv.content}
              </Text>
            </VStack>
          );
        })}
      </Flex>
    </Box>
  );
}
