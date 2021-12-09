import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionItem as TheAccordionItem,
  Flex
} from "@chakra-ui/react";
import { Transaction } from "../types/Transaction";
import MainButton from "./MainButton";
import ApiServices from "../ApiServices";
import { useDispatch } from "react-redux";
import { ProjectionApiResponse } from "../types/ApiResponses";
type Props = {
  transaction: Transaction;
};
export default function AccordianSingleItem({ transaction }: Props) {
  const dispatch = useDispatch();

  const deleteTransaction = () => {
    ApiServices.deleteProjection({
      projectedChangeId: transaction.id,
      projectionsStartData: transaction.date,
    }).then((data: ProjectionApiResponse) => {
      dispatch({ type: "GET_PROJECTION_DATA", payload: data });
    });
  };

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
          <Flex justifyContent="space-around" h="100%" alignItems="center">
            {transaction.date.slice(0, 10)}
          <Flex>
          <Box mx="10px">
          {transaction.amount/100}
          </Box>
          <Box>
          {transaction.category}
           </Box>
           </Flex>
          <MainButton text={"X"} passedFunction={deleteTransaction} />
          </Flex>

        </AccordionPanel>
      </TheAccordionItem>
    </Accordion>
  );
}
