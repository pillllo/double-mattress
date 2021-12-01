import { Button } from "@chakra-ui/react";

type IProps = {
  passedFunction: () => void;
  text: string;
};

export default function MainButton({ passedFunction, text }: IProps) {
  return (
    <Button
      colorScheme="blue"
      onClick={() => {
        passedFunction();
      }}
      fontSize={[12, 14, 16, 18]}
    >
      {text}
    </Button>
  );
}
