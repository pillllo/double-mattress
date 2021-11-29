import { useState } from "react";
import { Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DashboardDatePicker.css";

function DashboardDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => {
        return setStartDate(date);
      }}
      maxDate={new Date()}
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
