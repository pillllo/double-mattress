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
  DashboardSavingsChart,
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
      <Flex w="100vw" justify="space-evenly">
        <DoubleSwitch text="EXPENSES" text2="INCOME" />

        <MainButton
          text={muhBoolean ? "Expenses" : "Income"}
          passedFunction={() => alert("Change")}
        />
      </Flex>
      <DashboardSavingsChart />
      {/* {muhBoolean ? <DashboardVisxPie /> : <DashboardUserPie />} */}
      {/* <DashboardVisxPie /> */}
      <DashboardCategoryBox />
    </Flex>
  );
}
