import type { NextPage } from "next";

import { ProductList } from "~/components/ProductList";
import { equipmentProducts } from "~/data/data";

const EquipmentPage: NextPage = () => {
  return (
    <>
      <ProductList products={equipmentProducts} />;
    </>
  );
};

export default EquipmentPage;
