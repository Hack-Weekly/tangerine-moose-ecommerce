import { type FormEvent } from "react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

import { ActionButton, IconOutlineButton } from "~/components/Button";
import { useCart } from "~/contexts/cart";
import getStripe from "~/lib/stripe";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity, cartItems, totalQuantity, totalPrice } = useCart();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });
      const data = (await response.json()) as { id: string };
      const stripe = await getStripe();

      if (!stripe) {
        console.error("Stripe is not defined");
        return;
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      console.error(error.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer isOpen={isOpen} placement="right" size={"md"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart {totalQuantity && <span>({totalQuantity} items)</span>}</DrawerHeader>

        <DrawerBody>
          {cartItems.length === 0 ? (
            <Flex height={"full"} alignItems={"center"} justifyContent={"center"}>
              <Text fontWeight={"bold"} fontSize="lg">
                Your cart is empty.
              </Text>
            </Flex>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={`${item.id}${item.variant ? `-${item.variant.id}` : ""}`}>
                  <HStack justifyContent={"space-between"} py={2} borderBottom={"1px"}>
                    <Flex>
                      <Image src={item.image_url} alt={item.name} boxSize={"64px"} mr={2} alignSelf={"center"} />
                      <Flex flexDir={"column"}>
                        <div>
                          <Text fontWeight={"bold"} fontSize="lg">
                            {item.name}
                          </Text>
                          <UnorderedList listStyleType={"none"} margin={0} fontSize={"sm"}>
                            {item.variant &&
                              item.variant?.options.map((option) => (
                                <ListItem key={option.name}>
                                  {`${option.name}: `}
                                  <Text as={"span"} fontWeight={"semibold"}>
                                    {option.value}
                                  </Text>
                                </ListItem>
                              ))}
                          </UnorderedList>
                        </div>
                      </Flex>
                    </Flex>
                    <VStack alignItems={"flex-end"}>
                      <Text>Qty.</Text>
                      <HStack spacing={"2"}>
                        <IconOutlineButton
                          icon={<MinusIcon />}
                          aria-label={"Decrement"}
                          onClick={() => {
                            if (item.quantity > 1) {
                              decreaseQuantity({ id: item.id, variantId: item.variant?.id });
                            } else {
                              removeFromCart({ id: item.id, variantId: item.variant?.id });
                            }
                          }}
                        />
                        <Text textAlign={"center"} minWidth={6}>
                          {item.quantity}
                        </Text>
                        <IconOutlineButton
                          icon={<AddIcon />}
                          aria-label={"Increment"}
                          onClick={() => increaseQuantity({ id: item.id, variantId: item.variant?.id })}
                        />
                        <IconOutlineButton
                          icon={<DeleteIcon />}
                          aria-label={"Remove"}
                          onClick={() => removeFromCart({ id: item.id, variantId: item.variant?.id })}
                        />
                      </HStack>
                      <Text fontSize={"lg"} fontWeight={"semibold"}>
                        {new Intl.NumberFormat(undefined, {
                          style: "currency",
                          currency: "USD",
                        }).format((item.price * item.quantity) / 100)}
                      </Text>
                    </VStack>
                  </HStack>
                </div>
              ))}
            </>
          )}
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <VStack w={"full"} alignItems={"flex-end"} fontSize={"lg"}>
            <Text>
              Quantity:{" "}
              <Text as={"span"} fontWeight={"semibold"}>
                {totalQuantity}
              </Text>
            </Text>
            <Text>
              Total:{" "}
              <Text as={"span"} fontWeight={"semibold"}>
                {new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice / 100)}
              </Text>
            </Text>
            <Box w={"full"}>
              <form onSubmit={(event) => void handleSubmit(event)}>
                <ActionButton type={"submit"} role={"link"} size={"lg"} w={"full"} square onClick={() => undefined}>
                  Checkout
                </ActionButton>
              </form>
            </Box>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
