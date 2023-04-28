import { type NextPage } from "next";

import { ProductList } from "~/components/ProductList";
import { coffeeProducts, equipmentProducts, teaProducts } from "~/data/data";

const products = [...coffeeProducts, ...teaProducts, ...equipmentProducts];
const Home: NextPage = () => {
  return <ProductList products={products} />;
};

export default Home;
