import { Text, Box, Flex, VStack, Avatar } from "@chakra-ui/react";

export default function Testomonials() {
  const data = [
    {
      name: "Eileen Stanley",
      role: "Spaceship Repairwoman",
      img: "https://randomuser.me/api/portraits/women/74.jpg",
      content: "'This thing is great, many fights at home 10/10'",
    },
    {
      name: "Adam Henderson",
      role: "Absolute Madman",
      img: "https://randomuser.me/api/portraits/men/97.jpg",
      content: "'I spent everything on Lego and now my partner is upset 1/10'",
    },
    {
      name: "Ruby Bailey",
      role: "Lizard Tamer",
      img: "https://randomuser.me/api/portraits/women/96.jpg",
      content:
<<<<<<< HEAD
        "Lizard Tamings a good job mate, and Double-Mattress helps me keep control of all my Lizard bucks",
=======
        "Lizard Tamings a good job mate, and Doubl-Mattress helps me keep control of all my Lizard bucks",
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
    },
  ];

  return (
    <Flex
<<<<<<< HEAD
      textAlign="center"
=======
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      direction="column"
      align="center"
      justify="space-between"
      overflowY="auto"
      h="90%"
      bgGradient="linear(to-r, blue.200, blue.400)"
<<<<<<< HEAD
      color="white"
=======
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
    >
      {data.map((indiv, i) => {
        return (
          <Box
            bg="gray.800"
            p="1rem"
            rounded="md"
            maxW="75vw"
            my="1.5rem"
            key={i.toString()}
            boxShadow="xl"
          >
            <Text
              py="1rem"
              px="5px"
              fontWeight="700"
              letterSpacing="wide"
              fontSize="18"
            >
              {indiv.content}
            </Text>
            <VStack pt="1rem">
              <Avatar src={indiv.img}></Avatar>
              <Text fontWeight="600" fontSize="18">
                {indiv.name}
              </Text>
              <Text fontWeight="300" fontSize="14">
                {indiv.role}
              </Text>
            </VStack>
          </Box>
        );
      })}
    </Flex>
  );
}
<<<<<<< HEAD
=======
//https://randomuser.me/api/portraits/men/97.jpg
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
