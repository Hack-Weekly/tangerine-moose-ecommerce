import { type NextPage } from "next";

import ProductList from "~/components/ProductList";
import { coffeeProducts, equipmentProducts, teaProducts } from "~/data/data";
import type { Coffee, Equipment, Tea } from "~/types/product";

const products: (Coffee | Tea | Equipment)[] = [...coffeeProducts, ...teaProducts, ...equipmentProducts];

const Home: NextPage = () => {
  return <ProductList productList={products} />;
};

export default Home;
