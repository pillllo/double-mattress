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
    <ButtonGroup isAttached>
      <Button
        onClick={() => {
          passedFunction();
          setBGColor(!backgroundColor);
        }}
        colorScheme={backgroundColor ? "white" : "blue"}
        color={backgroundColor ? "black" : "white"}
        isActive={!backgroundColor}
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
        colorScheme={backgroundColor ? "blue" : "white"}
        color={backgroundColor ? "white" : "black"}
        isActive={backgroundColor}
        fontSize={[12, 14, 16, 18]}
        shadow="lg"
      >
        {text2}
      </Button>
    </ButtonGroup>
  );
}
