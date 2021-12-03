import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem as TheAccordionItem,
  AccordionPanel,
  CircularProgress,
  Box,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Transaction } from "../types/Transaction";
import { ReduxState } from "../types/ReduxState";
import AccordianSingleItem from "./AccordianSingleItem";

interface TransactionType {
  transaction: Transaction;
}

export default function AccordionItem() {
  const transactions = useSelector(
    //@ts-ignore
    (state: ReduxState) => state.displayCategories.transactions
  );

  return (
    <div>
      <Flex direction="column" align="center">
        <Text fontSize={[12, 14, 16, 18]}>Balance</Text>
        <HStack>
          <Text fontSize={[14, 16, 18, 20]}>Expenses</Text>
          <Text fontSize={[14, 16, 18, 20]}>Income</Text>
        </HStack>
      </Flex>
      {transactions.length ? (
        transactions.map((transaction: any) => {
          if (transaction) {
            return <AccordianSingleItem transaction={transaction} />;
          }
        })
      ) : (
        <h1>Nada</h1>
      )}
    </div>
  );
}
