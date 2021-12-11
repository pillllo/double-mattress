import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
<<<<<<< HEAD
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
=======
  CircularProgress,
  AccordionItem as TheAccordionItem,
} from "@chakra-ui/react";
import { Transaction } from "../types/Transaction";
import MainButton from './MainButton'
import ApiServices from "../ApiServices";
import { useSelector, useDispatch } from "react-redux";
type Props={
  transaction:Transaction
}
export default function AccordianSingleItem({transaction}:Props) {
  const dispatch= useDispatch();
  console.log(transaction)

  const deleteTransaction=()=>{
    ApiServices.deleteProjection({projectedChangeId:transaction.id, projectionsStartData:transaction.date}).then((data:any)=>{
      console.log(data);
    dispatch({type:"GET_PROJECTION_DATA",payload:data})
    })
  }


>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d

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
<<<<<<< HEAD
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
=======
          {transaction.amount}
          {transaction.category}
          <MainButton text={"X"} passedFunction={deleteTransaction}/>
        </AccordionPanel>
      </TheAccordionItem>

>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
    </Accordion>
  );
}
