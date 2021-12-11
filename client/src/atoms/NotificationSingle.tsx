<<<<<<< HEAD
import { Flex, Text } from "@chakra-ui/react";
=======
import { Flex, Text, Heading } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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
<<<<<<< HEAD
        <Text>{notification.fromUserName}</Text>
      </Flex>
      <Flex align="flex-start" justify="space-around">
        <Text>{notification.message}</Text>
=======
        <Text>{notification}</Text>
      </Flex>
      <Flex align="flex-start" justify="space-around">
        <Text>{notification}</Text>
        <Text>Spend: ${notification}</Text>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      </Flex>
    </Flex>
  );
}
