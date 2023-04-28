import type {} from "@chakra-ui/icons";
import type { ReactElement, ReactNode } from "react";
import { Button, type ButtonOptions } from "@chakra-ui/react";

type ButtonProps = ButtonOptions & {
  onClick: () => void;
  icon?: ReactElement;
  full?: boolean;
  square?: boolean;
  p?: number;
  children: ReactNode;
};

const ActionButton = ({ onClick, icon, full, square, p, children, ...props }: ButtonProps) => (
  <Button
    variant={"solid"}
    leftIcon={icon}
    colorScheme={"primary"}
    size={"sm"}
    minW={"100px"}
    width={full ? "100%" : "auto"}
    p={p}
    borderRadius={square ? "0" : "md"}
    _hover={{
      boxShadow: "2px 2px white, 4px 4px black",
      transform: "translate(-4px, -4px)",
    }}
    _focusVisible={{
      outline: "none",
      boxShadow: "2px 2px white, 4px 4px black",
      transform: "translate(-4px, -4px)",
    }}
    onClick={onClick}
    {...props}
  >
    {children}
  </Button>
);

const OutlineButton = ({ children }: { children: ReactNode }) => <Button>{children}</Button>;

export { ActionButton, OutlineButton };
