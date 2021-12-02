import DashboardDatePicker from "./DashboardDatePicker/DashboardDatePicker";
import { Flex, Text } from "@chakra-ui/react";
export default function DateRangeSelector() {
  return (
    <Flex direction="column" h="15vh" justify="space-between">
      <Text color="white" alignSelf="center">
        Start Date:
      </Text>
      <DashboardDatePicker isDouble={true} />
      <Text color="white" alignSelf="center">
        End Date:
      </Text>
      <DashboardDatePicker isDouble={true} />
    </Flex>
  );
}
