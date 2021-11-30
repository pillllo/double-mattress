
import { Accordion, AccordionButton, AccordionIcon, AccordionItem as TheAccordionItem, AccordionPanel, CircularProgress, Box } from '@chakra-ui/react'
import {Transaction} from '../types/Transaction'
interface TransactionType {
    transaction: Transaction;
  }

export default function AccordionItem({ transaction }: TransactionType) {
    return (
<>
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
    )
}
