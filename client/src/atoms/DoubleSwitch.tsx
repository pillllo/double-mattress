import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

type IProps = {
  passedFunction: () => void;
  text: string;
  text2: string;
};

export default function DoubleSwitch({ passedFunction, text, text2 }: IProps) {
  const [backgroundColor, setBGColor] = useState(true);

  return (
    <ButtonGroup isAttached mb="5">
      <Button
        onClick={() => {
          passedFunction();
          setBGColor(!backgroundColor);
        }}
        colorScheme={backgroundColor ? "blue" : "blackAlpha"}
        color={backgroundColor ? "gray.800" : "white"}
        fontSize={[12, 14, 16, 18]}
        shadow="lg"
      >
        {text}
      </Button>
      <Button
        onClick={() => {
          passedFunction();
          setBGColor(!backgroundColor);
        }}
        colorScheme={backgroundColor ? "blackAlpha" : "blue"}
        color={backgroundColor ? "white" : "gray.800"}
        fontSize={[12, 14, 16, 18]}
        shadow="lg"
      >
        {text2}
      </Button>
    </ButtonGroup>
  );
}
