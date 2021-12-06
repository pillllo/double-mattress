import { Flex, Spacer, Box } from "@chakra-ui/react";
type Props = {
  title: string;
  price: number;
  currency: string;
  date: string;
};
export default function DashboardTransaction({
  title,
  price,
  currency,
  date,
}: Props) {
  return (
    <div>
      <Flex border="1px" borderColor="gray-700" width="150px">
        <Box mr={2} ml={2}>
          02/11
        </Box>
        <Spacer />
        <Box mr={2}>Home</Box>
        <Spacer />
        <Box mr={2}> $123.52</Box>
      </Flex>
    </div>
  );
}
