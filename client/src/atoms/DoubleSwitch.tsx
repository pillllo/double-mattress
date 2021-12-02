import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

type IProps = {
  buttonText: string;
  buttonText2: string;
};

export default function DoubleSwitch({ buttonText, buttonText2 }: IProps) {
  const [backgroundColor, setBGColor] = useState(true);

  const dispatch = useDispatch();

  return (
    <ButtonGroup isAttached mb="5">
      <Button
        onClick={() => {
          dispatch({ type: "SWITCH_DISPLAY" });
          setBGColor(!backgroundColor);
        }}
        colorScheme={backgroundColor ? "blue" : "blackAlpha"}
        color={backgroundColor ? "gray.800" : "white"}
        fontSize={[12, 14, 16, 18]}
        shadow="lg"
      >
        {buttonText}
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: "SWITCH_DISPLAY" });
          setBGColor(!backgroundColor);
        }}
        colorScheme={backgroundColor ? "blackAlpha" : "blue"}
        color={backgroundColor ? "white" : "gray.800"}
        fontSize={[12, 14, 16, 18]}
        shadow="lg"
      >
        {buttonText2}
      </Button>
    </ButtonGroup>
  );
}
