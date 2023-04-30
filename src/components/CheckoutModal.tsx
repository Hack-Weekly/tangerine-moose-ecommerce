import { FC } from "react";
import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

import ProductContent from "~/components/ProductContent";
import { useCart } from "~/contexts/cart";
import { CartItem } from "~/types/cart";
import type { Product } from "~/types/product";
import { ActionButton } from "./Button";

type CheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartItemComp: FC<{ item: CartItem }> = ({ item }) => {
  const cart = useCart();
  return (
    <div>
      {item.product.name} - {item.quantity}
      <ActionButton
        onClick={() => {
          cart.decreaseQuantity(item.product.id);
        }}
      >
        -
      </ActionButton>
      <ActionButton
        onClick={() => {
          cart.increaseQuantity(item.product.id);
        }}
      >
        +
      </ActionButton>
    </div>
  );
};

const CheckoutFooter: FC = () => {
  const cart = useCart();
  // const api = useApi();

  const purchase = () => {
    // api.makePurchase(cart.cartItems)
  };
  return (
    <div>
      <ActionButton onClick={purchase}>Purchase</ActionButton>
    </div>
  );
};
const CheckoutModal: FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const cart = useCart();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={["full", "lg", "xl"]} blockScrollOnMount={false}>
      <ModalOverlay backdropFilter={"blur(2px)"} />
      <ModalContent p={"1rem"} borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
        <ModalHeader p={4} />
        <ModalCloseButton
          variant={"outline"}
          colorScheme={"secondary"}
          border={"1px solid transparent"}
          borderRadius={0}
          _hover={{
            bg: "none",
            border: "1px solid black",
          }}
        />
        <ModalBody>
          <Stack direction={["column"]}>
            <Flex flexDir={"column"} gap={4}>
              {cart.cartItems.map((item) => (
                <CartItemComp key={item.product.id} item={item} />
              ))}
            </Flex>
            <CheckoutFooter />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
