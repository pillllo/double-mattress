import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
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
export default function Projection() {
  return (
    <Flex
    h="90%"
    direction="column"
    align="center"
    mt="15px"
    justify="space-evenly"
  >
    <ProjectionLineChart avgExp={500} avgInc={1200} balance={4000}/>
    <MainButton passedFunction={() => alert('hi')} text={"MuhButton"}/>
    <DateRangeSelector />
  </Flex>
  )
}
