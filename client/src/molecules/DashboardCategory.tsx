import {
  Flex,
  Icon,
  Text,
  HStack,
  IconButton,
  Divider,
  useBreakpointValue,
  useDisclosure,
<<<<<<< HEAD
=======
  Tooltip,
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
<<<<<<< HEAD
=======
import { Transaction } from "../types/Transaction";

>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
import {
  FaHouseUser,
  FaHeartBroken,
  FaMoneyBill,
  FaShoppingCart,
  FaTheaterMasks,
  FaHamburger,
<<<<<<< HEAD
  FaBoxes,
  FaInfoCircle,
  FaHandshake,
  FaBarcode,
} from "react-icons/fa";

import { Transaction } from "../types/Transaction";
=======
  FaHandMiddleFinger,
  FaInfoCircle,
} from "react-icons/fa";
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
import { DashboardCategoryItem } from "../atoms/";

type Props = {
  title: string;
  price: number;
  currency: string;
  transactionList: Transaction[];
};
export default function DashboardCategory({
  title,
  price,
  currency,
  transactionList,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function iconDecider(cat: string) {
    switch (cat) {
<<<<<<< HEAD
      case "Home":
=======
      case "Rent":
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
        return FaHouseUser;
      case "Bills and Services":
        return FaMoneyBill;
      case "Shopping":
        return FaShoppingCart;
      case "Entertainment":
        return FaTheaterMasks;
      case "Eating Out":
        return FaHamburger;
      case "Others":
<<<<<<< HEAD
        return FaBoxes;
      case "Salary":
        return FaHandshake;
      case "Other Income":
        return FaBarcode;
=======
        return FaHandMiddleFinger;
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      default:
        <FaHeartBroken />;
    }
  }
  function currencyDecider(cur: string) {
    switch (cur) {
      case "eur":
        return "€";
<<<<<<< HEAD
=======

>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      default:
        break;
    }
  }
  const buttonSize = useBreakpointValue(["2rem", "3rem"]);

  return (
    <>
      <Flex
        direction="row"
        py="3px"
        justify="space-between"
        align="center"
        width="95%"
        px="1rem"
<<<<<<< HEAD
        color="white"
        my="2"
        letterSpacing="wide"
=======
        onClick={() => {}}
        color="white"
        my="2"
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      >
        <Icon as={iconDecider(title)} w={[4, 6]} h={[4, 6]} />
        <HStack justify="space-between" w="50%">
          <Text fontSize={[14, 18]}>{title || "Home"}</Text>
          <Text fontSize={[14, 18]}>
            {currencyDecider(currency)}
            {price || 123.5}
          </Text>
        </HStack>
<<<<<<< HEAD

        <IconButton
          bg="whiteAlpha.200"
          aria-label="Category Info"
          icon={<FaInfoCircle />}
          boxSize={buttonSize}
          onClick={() => onOpen()}
        />
      </Flex>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg="gray.700" color="white">
=======
        <Tooltip hasArrow label="Click me for more info!">
          <IconButton
            aria-label="Category Info"
            icon={<FaInfoCircle />}
            boxSize={buttonSize}
            onClick={() => onOpen()}
          />
        </Tooltip>
      </Flex>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
          <ModalHeader textAlign="center">{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center" justify="center">
<<<<<<< HEAD
              <Text fontSize="18" letterSpacing="wide" fontWeight="500">
                You spent: €{price} on {title} this month
=======
              <Text>
                You spent: $ {price} on {title} this month
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
              </Text>
            </Flex>
            <Accordion allowToggle my="2rem" mx="1rem">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      All Transactions
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p="4">
                  {transactionList.map((transaction, i) => {
                    return (
                      <DashboardCategoryItem
                        transaction={transaction}
                        key={i}
                      />
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>
          <ModalFooter>
<<<<<<< HEAD
            <Button bg="whiteAlpha.200" onClick={onClose}>
              Close
            </Button>
=======
            <Button onClick={onClose}>Close</Button>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Divider />
    </>
  );
}
