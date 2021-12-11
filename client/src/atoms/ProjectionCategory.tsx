import { Flex, Icon, Text, HStack, Divider } from "@chakra-ui/react";
import {
  FaHouseUser,
  FaHeartBroken,
  FaMoneyBill,
  FaShoppingCart,
  FaTheaterMasks,
  FaHamburger,
  FaHandMiddleFinger,
} from "react-icons/fa";

type Props = {
  category: string;
  price: number;
  currency: string;
};
export default function ProjectionCategory({
  category,
  price,
  currency,
}: Props) {
  function iconDecider(cat: string) {
    switch (cat) {
      case "Home":
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

      default:
        break;
    }
  }
  return (
    <Flex
      py="10px"
      direction="column"
      justify="space-evenly"
      align="center"
      w="100%"
    >
      <Flex color="white" justify="space-between" w="100%" px="5">
        <Icon as={iconDecider(category)} w={[4, 6]} h={[4, 6]} />

        <Text fontSize={[14, 18]}>{category || "Home"}</Text>
        <Text fontSize={[14, 18]}>
          {currencyDecider(currency)}
          {Math.floor(price / 10)}
        </Text>
      </Flex>
      <Divider />
    </Flex>
  );
}
