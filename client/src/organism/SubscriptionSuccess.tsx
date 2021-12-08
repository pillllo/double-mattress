
import {
  Flex,
  Box,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
  Spinner
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ApiServices from "../ApiServices";
import { ReduxState } from "../types/ReduxState";
import { ProjectionApiResponse } from "../types/ApiResponses";

export default function SubscriptionSuccess() {
  const navigate= useNavigate();
  const search = useLocation().search.replace("?session_id=","");
  const dispatch = useDispatch();
  const userId = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });
  if (search) {
    console.log(search);
    ApiServices.sendSubSessionId({ userId, sessionId: search }).then(
      (data) => {
        console.log(data);
        dispatch({ type: "GET_USER_DATA", payload: data });

        navigate("/projections")

      }
    );
  }

  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center" >
      <Spinner size="xl"/>
    </Flex>
  )
}
