import type { Coffee, Equipment, Tea } from "~/types/product";
import CoffeeContent from "./CoffeeContent";
import EquipmentContent from "./EquipmentContent";
import TeaContent from "./TeaContent";

type ContentProps = {
  product: Coffee | Tea | Equipment;
  onAdd: () => void;
};

const ProductContent = ({ product, onAdd }: ContentProps) => {
  return (
    <>
      {"grindOptions" in product && <CoffeeContent product={product} onAdd={onAdd} />}
      {"format" in product && <TeaContent product={product} onAdd={onAdd} />}
      {"variant_type" in product && <EquipmentContent product={product} onAdd={onAdd} />}
    </>
  );
};

export default ProductContent;
