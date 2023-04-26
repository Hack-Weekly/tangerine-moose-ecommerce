import type { ReactNode } from "react";
import { Button, type ButtonOptions } from "@chakra-ui/react";

type ButtonProps = ButtonOptions & {
  onClick: () => void;
  children: ReactNode;
};

const ActionButton = ({ onClick, children, ...props }: ButtonProps) => (
  <Button
    variant={"solid"}
    colorScheme={"primary"}
    size={"sm"}
    width={"100px"}
    mr={4}
    _hover={{
      boxShadow: "1px 1px white, 2px 2px black",
      transform: "translate(-2px, -2px)",
    }}
    _focusVisible={{
      outline: "none",
      boxShadow: "1px 1px white, 2px 2px black",
      transform: "translate(-2px, -2px)",
    }}
    onClick={onClick}
    {...props}
  >
    {children}
  </Button>
);

const OutlineButton = ({ children }: { children: ReactNode }) => <Button>{children}</Button>;

export { ActionButton, OutlineButton };
