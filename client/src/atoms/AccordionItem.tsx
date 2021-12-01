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
import { Transaction } from "../types/Transaction";

interface TransactionType {
  transaction: Transaction;
}

export default function AccordionItem({ transaction }: TransactionType) {
  return (
    <>
      <Flex direction="column" align="center">
        <Text fontSize={[12, 14, 16, 18]}>Howdy Pardner</Text>
        <HStack>
          <Text fontSize={[14, 16, 18, 20]}>ABC</Text>
          <Text fontSize={[14, 16, 18, 20]}>EASY AS 123</Text>
        </HStack>
      </Flex>
      <Accordion allowToggle>
        <TheAccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {transaction.description}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {transaction.amount}
            {transaction.category}
            <CircularProgress height="100px" isIndeterminate />
          </AccordionPanel>
        </TheAccordionItem>
      </Accordion>
    </>
  );
}
