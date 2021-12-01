import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import DashboardCategoryBox from "../molecules/DashboardCategoryBox/DashboardCategoryBox";

import {
  DashboardTransaction,
  DashboardCategory,
  AccordionItem,
  ProjectionLineChart,
  DashboardVisxPie,
  DashboardUserPie,
  DoubleSwitch,
  DateRangeSelector,
  MainButton,
  DashboardDatePicker,
} from "../atoms/index";

export default function Dashboard() {
  const muhBoolean = useSelector(
    (state: any) => state.displayCategories.switch
  );

  return (
    <Flex
      h="90%"
      direction="column"
      align="center"
      mt="15px"
      justify="space-evenly"
    >
      <DashboardDatePicker double={false} />
      <DoubleSwitch text="EXPENSES" text2="INCOME" />
      {muhBoolean ? <DashboardVisxPie /> : <DashboardUserPie />}
      {/* <DashboardVisxPie /> */}
      <DashboardCategoryBox />
    </Flex>
  );
}
