import DashboardDatePicker from "./DashboardDatePicker/DashboardDatePicker";
import { Flex, Text } from "@chakra-ui/react";
<<<<<<< HEAD

export default function DateRangeSelector() {
  return (
    <Flex direction="column" h="15vh">
=======
export default function DateRangeSelector() {
  return (
    <Flex direction="column" h="15vh" >
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      <Text color="white" alignSelf="center">
        Start Date:
      </Text>
      <DashboardDatePicker isDouble={true} />
    </Flex>
  );
}
