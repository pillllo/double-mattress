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
<<<<<<< HEAD
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

=======
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
import {
  AccordionItem,
  ProjectionLineChart,
  DateRangeSelector,
  MainButton,
  ProjectionForm,
<<<<<<< HEAD
} from "../atoms/index";
import ProjectionCategoryBox from "../molecules/ProjectionCategoryBox/ProjectionCategoryBox";
import ApiServices from "../ApiServices";
import { ReduxState } from "../types/ReduxState";
import { ProjectionApiResponse } from "../types/ApiResponses";

export default function Projection() {
  const search = useLocation().search;
  const dispatch = useDispatch();
  const userId = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });
  const date = useSelector((state: ReduxState) => {
    return state.displayCategories.projectionDate;
  });

  useEffect(() => {
    if (userId && date) {
      ApiServices.getProjections({ userId, date }).then(
        (data: ProjectionApiResponse) => {
          dispatch({ type: "GET_PROJECTION_DATA", payload: data });
        }
      );
    }
    if (search) {
      console.log(search);
      ApiServices.sendSubSessionId({ userId, sessionId: search }).then(
        (data) => {
          console.log(data);
          dispatch({ type: "GET_USER_DATA", payload: data });
        }
      );
    }
  }, [userId, date]);
=======

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

>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        h="90%"
        w="100vw"
        direction="column"
        align="center"
<<<<<<< HEAD
        justify="space-between"
        color="white"
      >
        <Flex h="45vh" w="90vw">
          <ProjectionLineChart />
        </Flex>
        <Tabs isFitted variant="enclosed" w="100%" h="35vh">
          <TabList>
            <Tab>Projections</Tab>
=======
        justify="space-evenly"
      >
        <Flex h="50vh" w="90vw">
          <ProjectionLineChart  />
        </Flex>
        <Tabs isFitted variant="enclosed" w="100%" h="30vh">
          <TabList>
            <Tab>Projection List</Tab>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
            <Tab>Categories</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <TabPanels>
<<<<<<< HEAD
=======


>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
            <TabPanel>
              <AccordionItem />
            </TabPanel>

            <TabPanel>
<<<<<<< HEAD
              <ProjectionCategoryBox />
            </TabPanel>

            <TabPanel>
              <Flex direction="column" align="center" justify="space-around">
                <Box py="2vh">
                  <MainButton
                    passedFunction={() => onOpen()}
                    text={"Add a Projection"}
                  />
                </Box>
                <DateRangeSelector />
              </Flex>
            </TabPanel>
=======
               <ProjectionCategoryBox/>
            </TabPanel>

            <TabPanel>
              <Flex
                direction="column"
                align="center"
                justify="space-around"

              >
                <MainButton
                  passedFunction={() => onOpen()}
                  text={"Add a Projection"}
                />
                <DateRangeSelector />
              </Flex>
            </TabPanel>


>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
          </TabPanels>
        </Tabs>
        <ProjectionForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
    </>
  );
}
