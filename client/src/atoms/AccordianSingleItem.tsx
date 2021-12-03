import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  CircularProgress,
  AccordionItem as TheAccordionItem,
} from "@chakra-ui/react";

export default function AccordianSingleItem(transaction: any) {
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
          <CircularProgress height="100px" isIndeterminate />
        </AccordionPanel>
      </TheAccordionItem>
    </Accordion>
  );
}
