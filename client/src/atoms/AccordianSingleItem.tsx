import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  CircularProgress,
  AccordionItem as TheAccordionItem,
} from "@chakra-ui/react";
import { Transaction } from "../types/Transaction";
type Props={
  transaction:Transaction
}
export default function AccordianSingleItem({transaction}:Props) {
  console.log(transaction)
  return (
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
      
        </AccordionPanel>
      </TheAccordionItem>
    </Accordion>
  );
}
