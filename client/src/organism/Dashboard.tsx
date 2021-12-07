import { Flex, Spinner, Skeleton } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import DashboardCategoryBox from "../molecules/DashboardCategoryBox/DashboardCategoryBox";
import ApiServices from "../ApiServices";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
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
  const date = useSelector((state: ReduxState) => {
    const theDate = state.displayCategories.dashboardDate;
    return theDate.toISOString();
  });
  const userId = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });

  const [loadCheck, setLoadCheck] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoadCheck(true);
    ApiServices.getDashboard({ userId, date })
      .then((data) => {
        dispatch({ type: "GET_DASHBOARD_DATA", payload: data });
        setLoadCheck(false);
      })
      .catch((e) => console.log(e));
  }, [date]);

  return (
    <>
      <ToastContainer />
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
    </>
  );
}
