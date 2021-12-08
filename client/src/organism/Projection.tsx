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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  AccordionItem,
  ProjectionLineChart,
  DateRangeSelector,
  MainButton,
  ProjectionForm,
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        h="90%"
        w="100vw"
        direction="column"
        align="center"
        justify="space-between"
        color="white"
      >
        <Flex h="45vh" w="90vw">
          <ProjectionLineChart  />
        </Flex>
        <Tabs isFitted variant="enclosed" w="100%" h="35vh">
          <TabList>
            <Tab>Projection List</Tab>
            <Tab>Categories</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <AccordionItem />
            </TabPanel>

            <TabPanel>
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
          </TabPanels>
        </Tabs>
        <ProjectionForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
    </>
  );
}
