import { Flex } from "@chakra-ui/react";
import dataObject from "../MockData";
import DoubleSwitch from "../atoms/DoubleSwitch";
import DashboardDatePicker from "../atoms/DashboardDatePicker/DashboardDatePicker";
import DashboardPieChart from "../atoms/DashboardPieChart";
import DashboardCategoryBox from "../molecules/DashboardCategoryBox/DashboardCategoryBox";
import DashboardVisxPie from "../atoms/DashboardVisxPie";

export default function Dashboard() {
  return (
    <Flex
      h="90%"
      direction="column"
      align="center"
      mt="15px"
      justify="space-evenly"
    >
      <DoubleSwitch passedFunction={() => {}} text="EXPENSES" text2="INCOME" />
      <DashboardDatePicker />
      {/* <DashboardPieChart /> */}
      <DashboardVisxPie />
      <DashboardCategoryBox transactions={dataObject.mockTransactions} />
    </Flex>
  );
}
