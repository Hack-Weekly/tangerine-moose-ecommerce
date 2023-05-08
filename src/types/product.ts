import type { Product as PrismaProduct, Variant as PrismaVariant } from "@prisma/client";

// TODO: dont use number type for money as floating point math is not precise
//  use library like Dinero.js, Currency.js, and Numeral.js instead
export type Product = Omit<PrismaProduct, "basePrice" | "createdAt" | "updatedAt" | "variants" | "options"> & {
  basePrice: number;
  createdAt: string;
  updatedAt: string;
  variants: Variant[];
  options: ProductOption[];
};
export type ProductOption = {
  name: string;
  values: string[];
};

export type Variant = Omit<PrismaVariant, "price" | "options"> & {
  price: number;
  options: VariantOption[];
};

export type VariantOption = {
  name: string;
  value: string;
};
