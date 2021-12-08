import { Text, Heading, VStack, Button } from "@chakra-ui/react";

interface IProps {
  title: string;
  pricing: string;
  features: string[];
  priceKey: string;
}

export default function SubCard({
  title,
  pricing,
  features,
  priceKey,
}: IProps) {
  return (
    <VStack
      w="300px"
      align="center"
      justify="center"
      bg="gray.800"
      pt="1rem"
      my="1.5rem"
      mr={["0rem", "0rem", "1.5rem"]}
      rounded="xl"
      shadow="xl"
      border="1px solid white"
    >
      <Heading fontSize="22" fontWeight="600" px="1rem" color="white">
        {title}
      </Heading>
      <Text fontSize="26" fontWeight="700">
        {pricing}
      </Text>
      <VStack
        py="1rem"
        bgGradient="linear(to-br, red.300, orange.300)"
        w="100%"
        rounded="xl"
        color="black"
        fontWeight="600"
      >
        {features.map((feature, i) => {
          return <Text key={i}>!?!{feature}</Text>;
        })}
        <form
          action={
            "https://double-mattress.herokuapp.com/create-checkout-session"
          }
          method="POST"
        >
          <input type="hidden" name="lookup_key" value={priceKey} />
          <Button colorScheme="blue" type="submit">
            Purchase Plan
          </Button>
        </form>
      </VStack>
    </VStack>
  );
}
