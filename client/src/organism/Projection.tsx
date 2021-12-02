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
  AccordionItem,
  ProjectionLineChart,
  DateRangeSelector,
  MainButton,
  ProjectionForm,

} from "../atoms/index";
import ProjectionCategoryBox from "../molecules/ProjectionCategoryBox/ProjectionCategoryBox"
import {useEffect} from 'react';
import ApiServices from '../ApiServices'
import {ReduxState} from '../types/ReduxState'
export default function Projection() {
  const dispatch= useDispatch();
  const userId = useSelector((state:ReduxState) => {

    return state.displayCategories.userId;
  })
  const date= useSelector((state:ReduxState)=>{
    return state.displayCategories.projectionDate
  })

  // const stateObject= useSelector((state:ReduxState)=>{
  //   return state.displayCategories
  // })

  useEffect(() => {
    if(userId && date){
      ApiServices.getProjections({userId,date}).then((data)=>{
        console.log("HELLO?");
        console.log(data);
      dispatch({type:"GET_PROJECTION_DATA",payload:data})
      })
    }

  }, [userId,date]);


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
            <Tab>Categories</Tab>
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

            <TabPanel>
               <ProjectionCategoryBox/>
            </TabPanel>

          </TabPanels>
        </Tabs>
        <ProjectionForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
    </>
  );
}
