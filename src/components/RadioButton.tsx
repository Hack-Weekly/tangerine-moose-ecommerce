import type { ReactNode } from "react";
import { Box, Square, Text, Tooltip, chakra, useRadio, type UseRadioProps } from "@chakra-ui/react";

const CustomButtonProps = {
  maxWidth: "fit-content",
  aspectRatio: "1",
  fontSize: "sm",
  borderColor: "primary.500",
  borderWidth: 1,
  borderRadius: 0,
  transitionProperty: "common",
  transitionDuration: "normal",
  _hover: {
    boxShadow: "2px 2px white, 4px 4px black",
    transform: "translate(-4px, -4px)",
    _disabled: { boxShadow: "inherit", transform: "inherit" },
  },
  _focusVisible: {
    outline: "none",
    boxShadow: "2px 2px white, 4px 4px black",
    transform: "translate(-4px, -4px)",
  },
  _checked: {
    color: "secondary.500",
    bg: "primary.500",
  },
};

const IconButton = ({ onClick, children }: { onClick?: () => void; children?: ReactNode }) => (
  <Square cursor={"pointer"} {...CustomButtonProps} onClick={onClick} p={3}>
    {children}
  </Square>
);

const RadioButton = ({ props, children }: { props: UseRadioProps; children?: ReactNode }) => {
  const { ...radioProps } = props;
  const { getInputProps, getRadioProps, htmlProps, getLabelProps } = useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor={"pointer"}>
      <input {...getInputProps({})} hidden />
      <Tooltip label={props.value} hasArrow openDelay={500}>
        <Square {...CustomButtonProps} {...getRadioProps()}>
          <Box {...getLabelProps()} aria-label={props.value}></Box>
          {children ? children : <Text>{props.value?.toUpperCase()}</Text>}
        </Square>
      </Tooltip>
    </chakra.label>
  );
};

export { RadioButton, IconButton };
