<<<<<<< HEAD
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

=======
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
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
import { Transaction } from "../types/Transaction";
import { ReduxState } from "../types/ReduxState";
import AccordianSingleItem from "../atoms/AccordianSingleItem";

<<<<<<< HEAD
export default function AccordionItem() {
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
=======
interface TransactionType {
  transaction: Transaction;
}

export default function AccordionItem() {


  const thisMonth = useSelector((state: ReduxState) => {
    return state.displayCategories.projectionDate;
  }).getMonth();

  const transactions = useSelector( (state: ReduxState) => {
    let allTransactions:Transaction[]=[];
     state.displayCategories.projectionData.map((month)=>{
      allTransactions.push(...month.projectedChanges)
    })
    return allTransactions
  }
  );

  return (
    <Box overflowY="auto"  h="25vh">
      <Flex direction="column" align="center" >
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
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      )}
    </Box>
  );
}
