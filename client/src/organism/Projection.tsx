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
import ProjectionCategoryBox from "../molecules/ProjectionCategoryBox/ProjectionCategoryBox";
import { useEffect } from "react";
import ApiServices from "../ApiServices";
import { ReduxState } from "../types/ReduxState";
import { ProjectionApiResponse } from "../types/ApiResponses";
export default function Projection() {
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
      >
        <Flex h="45vh" w="90vw">
          <ProjectionLineChart />
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
                <MainButton
                  passedFunction={() => onOpen()}
                  text={"Add a Projection"}
                />
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
