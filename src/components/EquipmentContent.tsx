import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { HStack, Menu, MenuItem, MenuList, Text } from "@chakra-ui/react";

import type { Equipment, Variant } from "~/types/product";
import { ActionButton, IconOutlineButton } from "./Button";
import Dropdown from "./Dropdown";

type EquipmentContentProps = {
  product: Equipment;
  onAdd: () => void;
};

const EquipmentContent = ({ product, onAdd }: EquipmentContentProps) => {
  const [price, setPrice] = useState(product.base_price);
  const [variant, setVariant] = useState(product.variants[0]?.label || "");
  const [value, setValue] = useState(product.variants[0]?.value || "");
  const selectVariant = ({ label, value, price }: Variant) => {
    setPrice(price);
    setVariant(label);
    setValue(value);
  };

  const [quantity, setQuantity] = useState(1);
  const decrement = () => setQuantity((prevQuantity) => prevQuantity - 1);
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);

  return (
    <>
      <Text fontWeight={"bold"} fontSize="xl">{`$${(quantity * price) / 100}`}</Text>
      <Menu matchWidth>
        <Dropdown label={product.variant_type} value={variant} />
        <MenuList borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
          {product.variants.map((variant) => (
            <MenuItem key={variant.value} onClick={() => selectVariant(variant)}>
              {variant.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <HStack spacing={"2"}>
        <IconOutlineButton
          icon={<MinusIcon />}
          aria-label={"Decrement"}
          onClick={decrement}
          isDisabled={quantity == 1}
        />
        <Text width={"6"} textAlign={"center"}>
          {quantity}
        </Text>
        <IconOutlineButton icon={<AddIcon />} aria-label={"Increment"} onClick={increment} />
      </HStack>
      <div>
        <ActionButton
          onClick={() => {
            console.log("variant: ", value);
            onAdd();
          }}
          square
          leftIcon={<AddIcon />}
          size={"md"}
          px={8}
        >
          Add to Cart
        </ActionButton>
      </div>
    </>
  );
};

export default EquipmentContent;