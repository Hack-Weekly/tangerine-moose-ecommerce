import { type NextPage } from "next";

import { ProductList } from "~/components/ProductList";
import { testProducts } from "~/data/data";

const Home: NextPage = () => {
  return <ProductList products={testProducts} />;
};

export default Home;
