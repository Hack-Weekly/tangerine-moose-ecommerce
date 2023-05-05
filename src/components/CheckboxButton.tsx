import { Text, chakra, useCheckbox, type UseCheckboxProps } from "@chakra-ui/react";

const CheckboxButton = (props: UseCheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      alignItems="center"
      gridColumnGap={2}
      maxW="40"
      border="1px solid"
      color={state.isChecked ? "secondary.500" : "primary.500"}
      bg={state.isChecked ? "primary.500" : "secondary.500"}
      borderColor={"primary.500"}
      px={3}
      py={1}
      cursor="pointer"
      transitionDuration={"300ms"}
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
      {...htmlProps}
      {...getCheckboxProps()}
    >
      <input {...getInputProps()} hidden />
      <Text {...getLabelProps()}>{props?.value?.toLocaleString().toUpperCase()}</Text>
    </chakra.label>
  );
};

export default CheckboxButton;
