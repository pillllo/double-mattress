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
      <Flex h="25">
        <ProjectionLineChart avgExp={500} avgInc={1200} balance={4000} />
      </Flex>
      <MainButton passedFunction={() => alert("hi")} text={"MuhButton"} />
      <DateRangeSelector />
      <AccordionItem
        transaction={{
          _id: 1,
          transactionId: "1",
          transactionType: "income",
          userId: "user_a",
          otherUserId: "user_b",
          amount: 10000,
          currency: "EUR",
          category: "salary",
          date: "2021-12-01T00:00:00.000Z",
          description: "Monthly salary",
          includeAvg: true,
        }}
      />
    </Flex>
  );
}
