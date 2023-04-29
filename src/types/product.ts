type ProductType = "coffee" | "tea" | "equipment";

// TODO: dont use number type for money as floating point math is not precise
//  use library like Dinero.js, Currency.js, and Numeral.js instead
export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  type: ProductType;
  primary_tag: string;
  tags: string[];
  options: Option[];
  variants: Variant[];
  image_url: string;
  color: string;
  base_price: number; // in cents //
  price_varies: boolean;
};

export type Option = {
  name: string;
  values: string[];
};

export type Variant = {
  id: number;
  options: { name: Option["name"]; value: Option["values"][0] }[];
  available: boolean;
  price: number;
};
