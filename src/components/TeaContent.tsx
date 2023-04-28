import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { HStack, Menu, MenuItem, MenuList, Text } from "@chakra-ui/react";

import { ActionButton, IconOutlineButton } from "./Button";
import Dropdown from "./Dropdown";
import type { Tea } from "./types/product";

const TeaContent = ({ product }: { product: Tea }) => {
  const [price, setPrice] = useState(product.base_price);
  const [amount, setAmount] = useState(product.variants[0]?.variant.label || "");
  const selectVariant = (label: string, price: number) => {
    setPrice(price);
    setAmount(label);
  };

  const [quantity, setQuantity] = useState(1);
  const decrement = () => setQuantity((prevQuantity) => prevQuantity - 1);
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);

  return (
    <>
      <Text fontWeight={"bold"} fontSize="xl">{`$${(quantity * price) / 100}`}</Text>
      <Menu matchWidth>
        <Dropdown label={"Amount"} value={amount} />
        <MenuList borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
          {product.variants.map(({ variant, price }) => (
            <MenuItem key={variant.amount} onClick={() => selectVariant(variant.label, price)}>
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
        <ActionButton onClick={() => console.log("added to cart")} square leftIcon={<AddIcon />} size={"md"} px={8}>
          Add to Cart
        </ActionButton>
      </div>
    </>
  );
};

export default TeaContent;
