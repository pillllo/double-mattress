import { VStack, Flex, HStack, Text, Heading } from "@chakra-ui/react";
import { SubCard } from "../atoms";

export default function Subscription() {
  return (
    <VStack letterSpacing="wide" pt="1.5rem" textAlign="center" h="90%">
      <Heading fontSize="24" fontWeight="500" p="1rem">
        Buy our plan cause we need{" "}
        <Text as="span" color="orange.400">
          money
        </Text>
      </Heading>
      <Flex
        direction={["column", "column", "column", "row"]}
        justify="space-evenly"
        align="center"
      >
        <SubCard
          key={1}
          title="Monthly"
          pricing="$25 / month"
          features={["Access to Projections", "Its sorta expensive"]}
          priceKey="dm_basic"
        />
        <SubCard
          key={2}
          title="Quarterly"
          pricing="$50 / quarterly"
          features={["Access to Projections", "Cheapo"]}
          priceKey="dm_standard"
        />
        <SubCard
          key={3}
          title="Bi-annually"
          pricing="$75 / bi-annually"
          features={["Access to Projections", "Uber-Cheapo"]}
          priceKey="dm_premium"
        />
      </Flex>
    </VStack>
  );
}
