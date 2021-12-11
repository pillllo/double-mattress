<<<<<<< HEAD
import { Flex, Text } from "@chakra-ui/react";
=======
import { Flex, Text, Heading } from "@chakra-ui/react";
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
import { formatDistanceToNow } from "date-fns";

export default function DashboardCategoryItem({ transaction }: any, i: number) {
  return (
    <Flex
      key={i}
      direction="column"
      mb="1.5rem"
      p="1rem"
      letterSpacing="wide"
      fontWeight="500"
<<<<<<< HEAD
      bg="whiteAlpha.100"
=======
      bgGradient="linear(to-b, blue.700, teal.600)"
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      rounded="lg"
      shadow="lg"
    >
      <Flex justify="space-around" mb="1rem">
        <Text>{formatDistanceToNow(new Date(transaction.date))} ago</Text>

        <Text>{transaction.category}</Text>
      </Flex>
      <Flex align="flex-start" justify="space-around">
        <Text>{transaction.description}</Text>
<<<<<<< HEAD
        <Text>Spend: €{transaction.amount / 100}</Text>
=======
        <Text>Spend: ${transaction.amount}</Text>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      </Flex>
    </Flex>
  );
}
