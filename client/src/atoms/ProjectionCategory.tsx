<<<<<<< HEAD
import { Flex, Icon, Text, HStack, Divider } from "@chakra-ui/react";
=======
import {
  Flex,
  Icon,
  Text,
  HStack,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
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
        return FaHandMiddleFinger;
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
        break;
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d

      default:
        break;
    }
  }
<<<<<<< HEAD
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
=======
  const buttonSize = useBreakpointValue(["2rem", "3rem"]);
  // useEffect(()=>{},[category])
  console.log("RENDERED");
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
        <Icon as={iconDecider(category)} w={[4, 6]} h={[4, 6]} />
        <HStack justify="space-between" w="50%">
          <Text fontSize={[14, 18]}>{category || "Home"}</Text>
          <Text fontSize={[14, 18]}>
            {currencyDecider(currency)}
            {price || 123.5}
          </Text>
        </HStack>
      </Flex>
      <Divider />
    </>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
  );
}
