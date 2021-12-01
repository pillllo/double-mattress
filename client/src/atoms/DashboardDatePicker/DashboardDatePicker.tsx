import { useState } from "react";
import { Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DashboardDatePicker.css";
import {useSelector, useDispatch } from "react-redux";
type Props={
  double:boolean;
}

function DashboardDatePicker({double}:Props) {
  const dispatch= useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
 const  changeReduxDate=(date:Date)=>{
    if(double) dispatch({type:"PROJECTION_DATE_CHANGE",payload:date})
    else dispatch({type:"DASHBOARD_DATE_CHANGE",payload:date})

    setStartDate(date);
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={changeReduxDate
      //   (date: Date) => {
      //   console.log(Date)
      //   return setStartDate(date);
      // }
    }
      maxDate={double? null:new Date()}
      minDate={double? new Date(): null}
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
