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

interface TransactionType {
  transaction: Transaction;
}

export default function AccordionItem() {
  const transactions = useSelector(
    //@ts-ignore
    (state) => state.displayCategories.transactions
  );

  return (
    <>
      <Flex direction="column" align="center">
        <Text fontSize={[12, 14, 16, 18]}>Howdy Pardner</Text>
        <HStack>
          <Text fontSize={[14, 16, 18, 20]}>ABC</Text>
          <Text fontSize={[14, 16, 18, 20]}>EASY AS 123</Text>
        </HStack>
      </Flex>
      {transactions.length ? (
        <Accordion allowToggle>
          <TheAccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {transactions.description}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {transactions.amount}
              {transactions.category}
              <CircularProgress height="100px" isIndeterminate />
            </AccordionPanel>
          </TheAccordionItem>
        </Accordion>
      ) : (
        <h3>Nada</h3>
      )}
    </>
  );
}
