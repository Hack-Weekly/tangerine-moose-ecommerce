import type { ReactElement, ReactNode } from "react";
import { ArrowDown, ArrowUp, CharacterSentenceCase, CurrencyDollar, Growth } from "@carbon/icons-react";
import { Box, Center } from "@chakra-ui/react";

import type { Product } from "~/types/product";

type SortOption = {
  value: string;
  icon: ReactElement;
  fn: (a: Product, b: Product) => number;
};

const CombinedIcon = ({ children }: { children: ReactNode }) => <Center mx="4px">{children}</Center>;

const sortOptions: SortOption[] = [
  {
    value: "Trending",
    icon: (
      <Box p={3}>
        <Growth />
      </Box>
    ),
    fn: (a: Product, b: Product) => Number(a.updatedAt < b.updatedAt),
  },
  {
    value: "Price: Low to High",
    icon: (
      <CombinedIcon>
        <CurrencyDollar />
        <ArrowUp />
      </CombinedIcon>
    ),
    fn: (a: Product, b: Product) => Number(a.basePrice > b.basePrice),
  },
  {
    value: "Price: High to Low",
    icon: (
      <CombinedIcon>
        <CurrencyDollar />
        <ArrowDown />
      </CombinedIcon>
    ),
    fn: (a: Product, b: Product) => Number(a.basePrice < b.basePrice),
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

export default sortOptions;
