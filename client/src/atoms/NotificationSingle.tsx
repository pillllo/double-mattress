import { Flex, Text, Heading } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { Notification } from "../types/Notification";
type Props={
  notification:Notification
}
export default function NotificationSingle({ notification }:Props) {
  return (
    <Flex
      direction="column"
      mb="1.5rem"
      p="1rem"
      letterSpacing="wide"
      fontWeight="500"
      bgGradient="linear(to-b, blue.700, teal.600)"
      rounded="lg"
      shadow="lg"
    >
      <Flex justify="space-around" mb="1rem">
        <Text>{notification}</Text>
      </Flex>
      <Flex align="flex-start" justify="space-around">
        <Text>{notification}</Text>
        <Text>Spend: ${notification}</Text>
      </Flex>
    </Flex>
  );
}
