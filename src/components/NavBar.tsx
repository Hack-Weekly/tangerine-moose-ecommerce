import { ShoppingBag } from "@carbon/icons-react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { AbsoluteCenter, Box, Flex, HStack, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

import { useCart } from "~/contexts/cart";
import { ActionButton, OutlineButton } from "./Button";
import CheckoutModal from "./CheckoutModal";
import NavButton from "./NavButton";

const Links = [
  { label: "Coffee", href: "/coffee" },
  { label: "Tea", href: "/tea" },
  { label: "Equipment", href: "/equipment" },
  { label: "About us", href: "/about" },
];

export default function NavBar() {
  const { data: sessionData } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isCartOpen, onOpen: onCartOpen, onClose: onCartClose } = useDisclosure();
  const { totalQuantity } = useCart();

  return (
    <Flex as={"header"} position={"sticky"} top={0} w={"100%"} zIndex={"sticky"}>
      <Box w={"100%"} px={4} m={4} border={"1px solid black"} bg={"white"} color={"black"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={{ lg: "none" }}>
            <IconButton
              size={"md"}
              color={"black"}
              bg={"none"}
              border={"1px solid transparent"}
              _hover={{
                bg: "none",
                border: "1px solid black",
              }}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
          </Box>
          <HStack as={"nav"} spacing={1} alignItems={"center"} display={{ base: "none", lg: "flex" }}>
            {Links.map(({ label, href }) => (
              <NavButton key={href} href={href}>
                {label}
              </NavButton>
            ))}
          </HStack>
          <AbsoluteCenter axis={"horizontal"}>
            <Link
              fontWeight={"bold"}
              fontSize={"4xl"}
              href={"/"}
              _focusVisible={{ outline: "none", textDecoration: "underline" }}
            >
              TANGERINE
            </Link>
          </AbsoluteCenter>
          <HStack spacing={2}>
            <ActionButton
              display={{ base: "none", md: "flex" }}
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </ActionButton>
            <OutlineButton
              aria-label={"Cart"}
              minW={"auto"}
              onClick={() => {
                onCartOpen();
              }}
            >
              <ShoppingBag color={totalQuantity > 0 ? "red" : undefined} />
              <Box as={"span"} marginLeft={2} display={{ base: "none", md: "block" }}>
                Cart
              </Box>
              {totalQuantity > 0 && <Box as={"span"} marginLeft={2} color={"red.700"}>{`(${totalQuantity})`}</Box>}
            </OutlineButton>
          </HStack>
        </Flex>
        <CheckoutModal isOpen={isCartOpen} onClose={onCartClose} />
        {isOpen && (
          <Stack pb={4} display={{ lg: "none" }} spacing={4}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ label, href }) => (
                <Link textColor={"primary.500"} key={href} href={href}>
                  {label}
                </Link>
              ))}
            </Stack>
            <ActionButton onClick={sessionData ? () => void signOut() : () => void signIn()}>
              {sessionData ? "Sign out" : "Sign in"}
            </ActionButton>
          </Stack>
        )}
      </Box>
    </Flex>
  );
}
