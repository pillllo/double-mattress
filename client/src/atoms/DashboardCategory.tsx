import { Flex, Spacer, Box } from "@chakra-ui/react";
import {Transaction} from '../types/Transaction'
type Props = {
  title: string;
  price: number;
  currency: string;
  transactionList: Transaction[];
};
export default function DashboardCategory({
  title,
  price,
  currency,
  transactionList
}: Props) {
  return (
    <Flex border="1px" borderColor="gray-700" width="150px" >
      <Box  mr={2} ml={2}>
      </Box >
      <Spacer/>
      <Box  mr={2}>Home</Box>
      <Spacer/>
      <Box  mr={2}> $123.52</Box>
    </Flex>
  );
}
