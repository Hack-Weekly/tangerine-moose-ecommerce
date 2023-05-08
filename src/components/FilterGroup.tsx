import { useEffect } from "react";
import { Box, HStack, useCheckboxGroup } from "@chakra-ui/react";
import { type ProductType } from "@prisma/client";

import CheckboxButton from "./CheckboxButton";

const filtersList = {
  coffee: ["blend", "single origin", "decaf"],
  tea: ["loose leaf", "tea bags", "black tea", "green tea"],
  equipment: ["brewer", "filters"],
};

// needed because `value` from `useCheckboxGroup` hook is of type (string | number)[]
// see https://chakra-ui.com/docs/hooks/use-checkbox-group
const isString = (element: string | number): element is string => typeof element === "string";

const FilterGroup = ({ productType, onChange }: { productType: ProductType; onChange: (result: string[]) => void }) => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  });
  const filters = filtersList[productType];

  useEffect(() => {
    onChange(value.filter(isString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Box w={"100%"} my={4}>
      <HStack>
        {filters && filters.map((filter) => <CheckboxButton key={filter} {...getCheckboxProps({ value: filter })} />)}
      </HStack>
    </Box>
  );
};

export default FilterGroup;
