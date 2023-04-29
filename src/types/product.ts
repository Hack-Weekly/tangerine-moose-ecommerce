type ProductType = "coffee" | "tea" | "equipment";

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  type: ProductType;
  primary_tag: string;
  tags: string[];
  base_price: number; // ¢
  available: boolean;
  price_varies: boolean;
  image_url: string;
  color: string;
}

type Variant = {
  label: string;
  value: string;
  price: number;
};

type GrindOption =
  | { value: "whole"; label: "Whole Bean" }
  | { value: "drip"; label: "Drip" }
  | { value: "espresso"; label: "Espresso" };
type CoffeeVariant = {
  variant: { label: "340g"; weight: 340 } | { label: "680g"; weight: 680 } | { label: "2.3kg"; weight: 2270 };
  price: number;
};

interface Coffee extends Product {
  variants: CoffeeVariant[];
  grindOptions: GrindOption[];
}

type TeaVariant = {
  variant: {
    label: string;
    amount: number;
  };
  price: number;
};

interface Tea extends Product {
  format: "loose-leaf" | "tea-bags";
  variants: TeaVariant[];
}

interface Equipment extends Product {
  variant_type: "Size" | "Capacity" | "Variant" | "Count";
  variants: Variant[];
}

export type { Coffee, Tea, Equipment, Variant };