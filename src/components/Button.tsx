import type {} from "@chakra-ui/icons";
import type { ReactNode } from "react";
import { Button, IconButton, forwardRef, type ButtonOptions, type IconButtonProps } from "@chakra-ui/react";

type ButtonProps = ButtonOptions & {
  onClick: () => void;
  square?: boolean;
  children?: ReactNode;
};

const sharedButtonProps = {
  size: "sm",
  minW: "100px",
  _hover: {
    boxShadow: "2px 2px white, 4px 4px black",
    transform: "translate(-4px, -4px)",
  },
  _focusVisible: {
    outline: "none",
    boxShadow: "2px 2px white, 4px 4px black",
    transform: "translate(-4px, -4px)",
  },
};

const ActionButton = forwardRef(({ onClick, square, children, ...props }: ButtonProps, ref) => (
  <Button
    ref={ref}
    variant={"solid"}
    colorScheme={"primary"}
    borderRadius={square ? "0" : "md"}
    onClick={onClick}
    {...sharedButtonProps}
    {...props}
  >
    {children}
  </Button>
));

const OutlineButton = forwardRef(({ onClick, square, children, ...props }: ButtonProps, ref) => (
  <Button
    ref={ref}
    variant={"outline"}
    colorScheme={"secondary"}
    borderRadius={square ? "0" : "md"}
    onClick={onClick}
    {...sharedButtonProps}
    {...props}
  >
    {children}
  </Button>
));

const IconOutlineButton = (props: IconButtonProps) => (
  <IconButton
    size={"md"}
    borderRadius={0}
    colorScheme={"secondary"}
    variant={"outline"}
    _hover={{
      boxShadow: "2px 2px white, 4px 4px black",
      transform: "translate(-4px, -4px)",
      _disabled: { boxShadow: "inherit", transform: "inherit" },
    }}
    _focusVisible={{
      outline: "none",
      boxShadow: "2px 2px white, 4px 4px black",
      transform: "translate(-4px, -4px)",
    }}
    {...props}
  />
);

export { ActionButton, OutlineButton, IconOutlineButton };
