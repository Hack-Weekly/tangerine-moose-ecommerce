type ProductType = 'coffee' | 'tea' | 'equipment';

interface ProductProps {
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

type GrindOption = {value: "whole", label: "Whole Bean"} | {value: "drip", label: "Drip"} | {value: "espresso", label: "Espresso"};
type CoffeeVariant = {
  variant: {label: '340g', weight: 340} | {label: '680g', weight: 680} | {label: '2.3kg', weight: 2270};
  price: number;
}

interface CoffeeProps extends ProductProps {
  variants: CoffeeVariant[];
  grindOptions: GrindOption[];
}

export type { CoffeeProps };