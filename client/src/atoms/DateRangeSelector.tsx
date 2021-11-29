import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DashboardDatePicker from './DashboardDatePicker/DashboardDatePicker';
import {useState} from 'react'
import { Flex, Spacer, Box } from "@chakra-ui/react";
export default function DateRangeSelector() {

  return (
    <Flex>
      <DashboardDatePicker/>
      <DashboardDatePicker/>
    </Flex>
  )
}
