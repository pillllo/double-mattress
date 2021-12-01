import {
  Flex,
  Box,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
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
  ProjectionForm,
} from "../atoms/index";
export default function Projection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        h="90%"
        w="100vw"
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <Flex h="35vh" w="90vw">
          <ProjectionLineChart avgExp={500} avgInc={1200} balance={4000} />
        </Flex>
        <Tabs isFitted variant="enclosed" w="100%" h="50%">
          <TabList>
            <Tab>Monkey</Tab>
            <Tab>Madness</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex
                direction="column"
                align="center"
                justify="space-around"
                height="35vh"
              >
                <MainButton
                  passedFunction={() => onOpen()}
                  text={"Add a Projection"}
                />
                <DateRangeSelector />
              </Flex>
            </TabPanel>
            <TabPanel>
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
            </TabPanel>
          </TabPanels>
        </Tabs>
        <ProjectionForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
    </>
  );
}
