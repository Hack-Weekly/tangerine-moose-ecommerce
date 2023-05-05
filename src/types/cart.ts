import { type Product, type Variant } from "~/types/product";

export interface CartItem {
  id: Product["id"];
  name: Product["name"];
  image_url: Product["image_url"];
  variant?: Variant;
  price: number;
  quantity: number;
}
