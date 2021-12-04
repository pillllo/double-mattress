import { Flex, Spinner, Skeleton } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import DashboardCategoryBox from "../molecules/DashboardCategoryBox/DashboardCategoryBox";
import ApiServices from "../ApiServices";
import { useEffect, useState } from "react";
import { ReduxState } from "../types/ReduxState";
import {
  DashboardVisxPie,
  DashboardUserPie,
  DoubleSwitch,
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
  const datePicker = useSelector((state: ReduxState) => {
    const theDate = state.displayCategories.dashboardDate;
    return theDate.toISOString();
  });

  const [loadCheck, setLoadCheck] = useState(true);

  const dispatch = useDispatch();

  // const userId = useSelector((state: ReduxState) => {
  //   return state.displayCategories.userId;
  // });
  // const date = useSelector((state: ReduxState) => {
  //   return state.displayCategories.projectionDate;
  // });
  useEffect(() => {
    const userId = "f65f19ed-a0b0-465c-991f-037a7ac6353b";
    const date = "2021-10-05T23:02:05.012Z";

    console.log("1 --> ", date, date === datePicker);
    console.log("2 --> ", datePicker);
    if (datePicker) {
      ApiServices.getDashboard({ userId, date })
        .then((data) => {
          dispatch({ type: "GET_DASHBOARD_DATA", payload: data });
          setLoadCheck(false);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <Flex
      h="90%"
      direction="column"
      align="center"
      mt="15px"
      justify="space-evenly"
    >
      <DashboardDatePicker isDouble={false} />
      <Flex w="100vw" justify="space-evenly">
        <DoubleSwitch buttonText="EXPENSES" buttonText2="INCOME" />

        <MainButton
          text={dataSwitch ? "EXPENSE" : "SAVINGS"}
          passedFunction={() => dispatch({ type: "DATASWITCH_DISPLAY" })}
        />
      </Flex>
      {loadCheck ? (
        <Spinner size="xl" />
      ) : dataSwitch ? (
        <DashboardSavingsChart />
      ) : muhBoolean ? (
        <DashboardVisxPie />
      ) : (
        <DashboardUserPie />
      )}
      {loadCheck ? (
        <Flex direction="column" w="85vw" h="250px" justify="space-evenly">
          <Skeleton size="md" height="25px" />
          <Skeleton size="md" height="25px" />
          <Skeleton size="md" height="25px" />
          <Skeleton size="md" height="25px" />
        </Flex>
      ) : (
        <DashboardCategoryBox />
      )}
    </Flex>
  );
}
