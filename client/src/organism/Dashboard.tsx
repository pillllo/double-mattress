import { Flex, Progress, Spinner } from "@chakra-ui/react";
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

  const [loadCheck, setLoadCheck] = useState(true);

  const dispatch = useDispatch();

  // const userId = useSelector((state: ReduxState) => {
  //   return state.displayCategories.userId;
  // });
  // const date = useSelector((state: ReduxState) => {
  //   return state.displayCategories.projectionDate;
  // });
  useEffect(() => {
    const userId = "0652eb0d-2152-4535-a97b-b65173a1aa59";
    const date = "2021-08-16T23:00:00.000Z";

    ApiServices.getDashboard({ userId, date }).then((data) => {
      dispatch({ type: "GET_DASHBOARD_DATA", payload: data });
      setLoadCheck(false);
    });
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
        <Flex direction="column" w="80vw" h="250px" justify="space-evenly">
          <Progress size="xs" isIndeterminate />
          <Progress size="xs" isIndeterminate />

          <Progress size="xs" isIndeterminate />

          <Progress size="xs" isIndeterminate />
        </Flex>
      ) : (
        <DashboardCategoryBox />
      )}
    </Flex>
  );
}
