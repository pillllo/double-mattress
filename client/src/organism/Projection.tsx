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
import { useSelector, useDispatch } from "react-redux";
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
import {useEffect} from 'react';
import ApiServices from '../ApiServices'
export default function Projection() {
  const dispatch= useDispatch();
  const userId = useSelector((state:any) => {
    //@ts-ignore
    //@ts-ignore
    return state.displayCategories.userId;
  })
  const date= useSelector((state:any)=>{
    return state.displayCategories.projectionDate
  })
  useEffect(() => {
    (async function () {
      const data = await ApiServices.getProjections({userId,date})
      dispatch({type:"GET_PROJECTION_DATA",payload:data})

    })();

  }, [userId]);


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
          <ProjectionLineChart  />
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
              <AccordionItem />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <ProjectionForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
    </>
  );
}
