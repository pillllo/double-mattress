import { Flex, Box, Divider, Button } from "@chakra-ui/react";
import DoubleSwitch from "./atoms/DoubleSwitch";
import MainButton from "./atoms/MainButton";

const App = function () {
  return (
    <Flex bg="gray.400" justify="center" h="100vh">
      <header className="">
        <Flex
          direction="column"
          w={[320, 480, 700, 990, 1280]}
          h="100%"
          align="center"
          justify="space-evenly"
          bgColor="gray.500"
        >
          <DoubleSwitch
            passedFunction={() => {}}
            text="RWETRHYSF"
            text2="HADSFGASF"
          />
          <MainButton text="Button Text" passedFunction={() => {}} />

          <Divider />
          <Flex justify="space-evenly" align="center" w="full">
            <Button bgGradient="linear(to-l, #7928CA, #FF0080)">Button</Button>
            <Button bgGradient="linear(to-b, #7928CA, #FF0080)">Button</Button>
          </Flex>
        </Flex>
      </header>
    </Flex>
  );
};

export default App;
