import { useEffect } from "react";
import { Box, HStack, useCheckboxGroup } from "@chakra-ui/react";

import CheckboxButton from "./CheckboxButton";

// needed because `value` from `useCheckboxGroup` hook is of type (string | number)[]
// see https://chakra-ui.com/docs/hooks/use-checkbox-group
const isString = (element: string | number): element is string => typeof element === "string";

const FilterGroup = ({ filters, onChange }: { filters: string[]; onChange: (result: string[]) => void }) => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  });

  useEffect(() => {
    onChange(value.filter(isString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Box w={"100%"} px={4} m={4}>
      <HStack>
        {filters && filters.map((filter) => <CheckboxButton key={filter} {...getCheckboxProps({ value: filter })} />)}
      </HStack>
    </Box>
  );
};

export default FilterGroup;
