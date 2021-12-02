import {
  Flex,
  Box,
  Icon,
  Button,
  Text,
  HStack,
  IconButton,
  Divider,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";
import { Transaction } from "../types/Transaction";
import "./DashboardCategory.css";
import {
  FaHouseUser,
  FaHeartBroken,
  FaMoneyBill,
  FaShoppingCart,
  FaTheaterMasks,
  FaHamburger,
  FaHandMiddleFinger,
  FaInfoCircle,
} from "react-icons/fa";

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
  function iconDecider(cat: string) {
    switch (cat) {
      case "Rent":
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
        return FaHandMiddleFinger;
      default:
        <FaHeartBroken />;
    }
  }
  function currencyDecider(cur: string) {
    switch (cur) {
      case "eur":
        return "€";
        break;

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
        onClick={() => {}}
        color="white"
        my="2"
      >
        <Icon as={iconDecider(title)} w={[4, 6]} h={[4, 6]} />
        <HStack justify="space-between" w="50%">
          <Text fontSize={[14, 18]}>{title || "Home"}</Text>
          <Text fontSize={[14, 18]}>
            {currencyDecider(currency)}
            {price || 123.5}
          </Text>
        </HStack>
        <Tooltip hasArrow label="Click me for more info!">
          <IconButton
            aria-label="Category Info"
            icon={<FaInfoCircle />}
            boxSize={buttonSize}
            onClick={() => alert("hi")}
          />
        </Tooltip>
      </Flex>
      <Divider />
    </>
  );
}
