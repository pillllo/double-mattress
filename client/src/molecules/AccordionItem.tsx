import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Transaction } from "../types/Transaction";
import { ReduxState } from "../types/ReduxState";
import AccordianSingleItem from "../atoms/AccordianSingleItem";

export default function AccordionItem() {
  const thisMonth = useSelector((state: ReduxState) => {
    return state.displayCategories.projectionDate;
  }).getMonth();

  const transactions = useSelector((state: ReduxState) => {
    let allTransactions: Transaction[] = [];
    state.displayCategories.projectionData.map((month) => {
      allTransactions.push(...month.projectedChanges);
    });
    return allTransactions;
  });

  return (
    <Box overflowY="auto" h="25vh">
      {transactions.length ? (
        transactions.map((transaction, i: number) => {
          if (transaction) {
            return <AccordianSingleItem transaction={transaction} key={i} />;
          }
        })
      ) : (
        <h1></h1>
      )}
    </Box>
  );
}
