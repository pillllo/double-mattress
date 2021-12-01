import { Flex, Box, Button } from "@chakra-ui/react";
import { Transaction } from "../types/Transaction";
import "./DashboardCategory.css";
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
  transactionList,
}: Props) {
  return (
    <>
      <Flex
        direction="row"
        borderBottom="1px"
        py="3px"
        justify="space-between"
        borderColor="gray-700"
        width="80%"
        px="1rem"
        onClick={() => {}}
        className="category-box"
        color="white"
        my="1"
      >
        <Box>I</Box>
        <Box>{title || "Home"}</Box>
        <Box> ${price || 123.5}</Box>
      </Flex>
    </>
  );
}
