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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Box >
      <Spacer/>
      <Box  mr={2}>Home</Box>
      <Spacer/>
      <Box  mr={2}> $123.52</Box>
    </Flex>
  );
}
