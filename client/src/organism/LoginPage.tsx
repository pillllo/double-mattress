import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <VStack p="5">
      <FormControl id="email">
        <FormLabel>Email Address</FormLabel>
        <Input type="email" autoComplete="email" required />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" required />
      </FormControl>
      <Button>Submit</Button>
    </VStack>
  );
}
