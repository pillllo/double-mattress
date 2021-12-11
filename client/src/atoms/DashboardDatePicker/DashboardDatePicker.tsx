import { Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DashboardDatePicker.css";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../../types/ReduxState";
type Props = {
  isDouble: boolean;
};

<<<<<<< HEAD
import { ReduxState } from "../../types/ReduxState";

type Props = {
  isDouble: boolean;
};

function DashboardDatePicker({ isDouble }: Props) {
  const dispatch = useDispatch();
  const datePicker = useSelector((state: ReduxState) =>
    isDouble
      ? state.displayCategories.projectionDate
      : state.displayCategories.dashboardDate
  );
=======
function DashboardDatePicker({ isDouble }: Props) {
  const dispatch = useDispatch();
  const datePicker = useSelector(
    (state: ReduxState) => isDouble? state.displayCategories.projectionDate: state.displayCategories.dashboardDate
  );

  const changeReduxDate = (date: Date) => {
    if (isDouble) dispatch({ type: "PROJECTION_DATE_CHANGE", payload: date });
    else dispatch({ type: "DASHBOARD_DATE_CHANGE", payload: date });
  };
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d

  const changeReduxDate = (date: Date) => {
    if (isDouble) dispatch({ type: "PROJECTION_DATE_CHANGE", payload: date });
    else dispatch({ type: "DASHBOARD_DATE_CHANGE", payload: date });
  };
  const nowDate = new Date();
  const projectionUseDate = nowDate.setMonth(nowDate.getMonth() - 1);
  return (
    <DatePicker
      selected={datePicker}
      onChange={changeReduxDate}
      maxDate={isDouble ? null : new Date()}
<<<<<<< HEAD
      minDate={isDouble ? new Date(projectionUseDate) : null}
=======
      minDate={isDouble ? new Date() : null}
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      withPortal
      dateFormat="MM/yyyy"
      showMonthYearPicker
    >
      <Text alignSelf="center" my="0.75rem">
        Choose a date
      </Text>
    </DatePicker>
  );
}

export default DashboardDatePicker;
