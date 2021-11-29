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
