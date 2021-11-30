import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import dataObject from "../MockData";
import DoubleSwitch from "../atoms/DoubleSwitch";
import DashboardDatePicker from "../atoms/DashboardDatePicker/DashboardDatePicker";
import DashboardPieChart from "../atoms/DashboardPieChart";
import DashboardCategoryBox from "../molecules/DashboardCategoryBox/DashboardCategoryBox";
import DashboardVisxPie from "../atoms/DashboardVisxPie";
import DashboardUserPie from "../atoms/DashboardUserPie";

export default function Dashboard() {
  const muhBoolean = useSelector((state: any) => state.displayCategories.switch);

  return (
    <Flex
      h="90%"
      direction="column"
      align="center"
      mt="15px"
      justify="space-evenly"
    >
      <DoubleSwitch text="EXPENSES" text2="INCOME" />
      <DashboardDatePicker double={false} />
      {muhBoolean ? <DashboardVisxPie /> : <DashboardUserPie />}
      {/* <DashboardVisxPie /> */}
      <DashboardCategoryBox />
    </Flex>
  );
}
