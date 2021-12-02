import { Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import DashboardCategoryBox from "../molecules/DashboardCategoryBox/DashboardCategoryBox";
import ApiServices from '../ApiServices'
import {useEffect} from 'react';
import {ReduxState} from '../types/ReduxState'
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
    (state: ReduxState) => state.displayCategories.switch
  );
  const dataSwitch = useSelector(
    (state: ReduxState) => state.displayCategories.dataSwitch
  );

  const dispatch= useDispatch();

  const userId = useSelector((state:ReduxState) => {
    return state.displayCategories.userId;
  })
  const date= useSelector((state:ReduxState)=>{
    return state.displayCategories.projectionDate
  })
 useEffect(() => {
    if(userId && date){
      ApiServices.getDashboard({userId,date}).then((data)=>{
        console.log("HELLO?");
        console.log(data);
      dispatch({type:"GET_DASHBOARD_DATA",payload:data})
      })
    }

  }, [userId,date]);


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
          text={dataSwitch ? "EXPENSE" : "SAVINGS"}
          passedFunction={() => dispatch({ type: "DATASWITCH_DISPLAY" })}
        />
      </Flex>
      {dataSwitch ? (
        <DashboardSavingsChart />
      ) : muhBoolean ? (
        <DashboardVisxPie />
      ) : (
        <DashboardUserPie />
      )}

      <DashboardCategoryBox />
    </Flex>
  );
}
