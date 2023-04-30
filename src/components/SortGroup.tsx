import { type ReactElement, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowsVertical,
  CharacterSentenceCase,
  CurrencyDollar,
  Growth,
  SortRemove,
} from "@carbon/icons-react";
import { Box, Center, Fade, Flex, Stack, Tooltip, useRadioGroup } from "@chakra-ui/react";

import type { Product } from "~/types/product";
import { IconButton, RadioButton } from "./RadioButton";

export type SortParam = {
  value: string;
  icon: ReactElement;
  fn: (a: Product, b: Product) => number;
};

const CombinedIcon = ({ children }: { children: ReactNode }) => <Center mx="4px">{children}</Center>;

const params: SortParam[] = [
  {
    value: "Trending",
    icon: (
      <Box p={3}>
        <Growth />
      </Box>
    ),
    fn: (a: Product, b: Product) => Number(a.updated_at < b.updated_at),
  },
  {
    value: "Price: Low to High",
    icon: (
      <CombinedIcon>
        <CurrencyDollar />
        <ArrowUp />
      </CombinedIcon>
    ),
    fn: (a: Product, b: Product) => Number(a.base_price > b.base_price),
  },
  {
    value: "Price: High to Low",
    icon: (
      <CombinedIcon>
        <CurrencyDollar />
        <ArrowDown />
      </CombinedIcon>
    ),
    fn: (a: Product, b: Product) => Number(a.base_price < b.base_price),
  },
  {
    value: "Alphabetical",
    icon: (
      <CombinedIcon>
        <CharacterSentenceCase />
        <ArrowUp />
      </CombinedIcon>
    ),
    fn: (a: Product, b: Product) => Number(a.name > b.name),
  },
  {
    value: "Reverse Alphabetical",
    icon: (
      <CombinedIcon>
        <CharacterSentenceCase />
        <ArrowDown />
      </CombinedIcon>
    ),
    fn: (a: Product, b: Product) => Number(a.name < b.name),
  },
];

const SortGroup = ({ handleChange }: { handleChange: (value: string) => void }) => {
  const { value, setValue, getRadioProps, getRootProps } = useRadioGroup({
    name: "Sort Options",
    onChange: handleChange,
  });

  return (
    <>
      <Flex justifyContent={"center"} p={3}>
        <ArrowsVertical />
      </Flex>
      <Stack {...getRootProps()}>
        {params.map(({ value, icon }) => {
          return (
            <RadioButton key={value} props={getRadioProps({ value })}>
              {icon}
            </RadioButton>
          );
        })}
        <Box hidden={!value}>
          <Tooltip label={"Remove Sort"} hasArrow openDelay={500}>
            <Fade in={!!value} delay={0.2}>
              <IconButton
                onClick={() => {
                  handleChange("");
                  setValue("");
                }}
              >
                <SortRemove />
              </IconButton>
            </Fade>
          </Tooltip>
        </Box>
      </Stack>
    </>
  );
};

export { SortGroup, params };
