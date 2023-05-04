import { type NextPage } from "next";

import ProductList from "~/components/ProductList";
import { allProducts } from "~/data/data";

const Home: NextPage = () => {
  return <ProductList productList={allProducts} />;
};

export default Home;
