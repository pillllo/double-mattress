import { Flex, Text } from "@chakra-ui/react";
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
      bg="whiteAlpha.100"
      rounded="lg"
      shadow="lg"
    >
      <Flex justify="space-around" mb="1rem">
        <Text>{formatDistanceToNow(new Date(transaction.date))} ago</Text>

        <Text>{transaction.category}</Text>
      </Flex>
      <Flex align="flex-start" justify="space-around">
        <Text>{transaction.description}</Text>
        <Text>Spend: €{transaction.amount / 100}</Text>
      </Flex>
    </Flex>
  );
}
