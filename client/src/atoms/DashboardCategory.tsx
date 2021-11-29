import { Flex, Spacer, Box } from "@chakra-ui/react";
type Props = {
  title: string;
  price: number;
  currency: string;
  date: string;
};
export default function DashboardCategory({
  title,
  price,
  currency,
  date,
}: Props) {
  return (
    <Flex border="1px" borderColor="gray-700" width="150px" >
      <Box  mr={2} ml={2}>
      </Box >
      <Spacer/>
      <Box  mr={2}>Home</Box>
      <Spacer/>
      <Box  mr={2}> $123.52</Box>
    </Flex>
  );
}
