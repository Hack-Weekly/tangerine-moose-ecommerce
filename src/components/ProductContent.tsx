import CoffeeContent from "./CoffeeContent";
import EquipmentContent from "./EquipmentContent";
import TeaContent from "./TeaContent";
import type { Coffee, Equipment, Tea } from "./types/product";

const ProductContent = ({ product }: { product: Coffee | Tea | Equipment }) => {
  return (
    <>
      {"grindOptions" in product && <CoffeeContent product={product} />}
      {"format" in product && <TeaContent product={product} />}
      {"variant_type" in product && <EquipmentContent product={product} />}
    </>
  );
};

export default ProductContent;
