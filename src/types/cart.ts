import { type Product } from "~/types/product";

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}
