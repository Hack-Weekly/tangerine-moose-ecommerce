import { useEffect } from "react";
import { Box, HStack, Text, chakra, useCheckbox, useCheckboxGroup, type UseCheckboxProps } from "@chakra-ui/react";

const FilterGroup = ({ filters, onChange }: { filters: string[]; onChange: (value: string[]) => void }) => {
  function CustomCheckbox(props: UseCheckboxProps) {
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
  }

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  });

  // needed because `value` from `useCheckboxGroup` hook is of type (string | number)[]
  // see https://chakra-ui.com/docs/hooks/use-checkbox-group
  const isString = (element: string | number): element is string => typeof element === "string";

  useEffect(() => {
    onChange(value.filter(isString));
  }, [value, onChange]);

  return (
    <Box w={"100%"} px={4} m={4}>
      <HStack>
        {filters.map((filter) => (
          <CustomCheckbox key={filter} {...getCheckboxProps({ value: filter })} />
        ))}
      </HStack>
    </Box>
  );
};

export default FilterGroup;
