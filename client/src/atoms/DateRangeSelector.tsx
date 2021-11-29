import DashboardDatePicker from './DashboardDatePicker/DashboardDatePicker';
import { Flex, Spacer, Box } from "@chakra-ui/react";
export default function DateRangeSelector() {

  return (
    <Flex>
      <DashboardDatePicker double={true}/>
      <DashboardDatePicker double={true}/>
    </Flex>
  )
}
