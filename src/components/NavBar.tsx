import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ShoppingBag } from "@carbon/icons-react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { AbsoluteCenter, Box, Flex, HStack, IconButton, Stack, useDisclosure, useOutsideClick } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

import { CartDrawer } from "~/components/CartDrawer";
import { useCart } from "~/contexts/cart";
import { ActionButton, OutlineButton } from "./Button";
import NavButton from "./NavButton";

const Links = [
  { label: "Coffee", href: "/coffee" },
  { label: "Tea", href: "/tea" },
  { label: "Equipment", href: "/equipment" },
  { label: "About us", href: "/about" },
];

export default function NavBar() {
  const { data: sessionData } = useSession();
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
  const { totalQuantity } = useCart();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { asPath } = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onMenuClose();
  }, [asPath, onMenuClose]);

  useOutsideClick({
    ref: menuRef,
    handler: () => onMenuClose(),
  });

  return (
    <>
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
                icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                onClick={isMenuOpen ? onMenuClose : onMenuOpen}
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
                fontSize={["2xl", "4xl"]}
                href={"/"}
                _focusVisible={{ outline: "none", textDecoration: "underline" }}
              >
                TANGERINE
              </Link>
            </AbsoluteCenter>
            <HStack spacing={2}>
              <ActionButton
                display={{ base: "none", lg: "flex" }}
                onClick={sessionData ? () => void signOut() : () => void signIn()}
              >
                {sessionData ? "Sign out" : "Sign in"}
              </ActionButton>
              <OutlineButton
                aria-label={"Cart"}
                minW={"auto"}
                onClick={() => {
                  onDrawerOpen();
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
          {isMenuOpen && (
            <Stack pb={4} display={{ lg: "none" }} spacing={4} ref={menuRef}>
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
      <CartDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
    </>
  );
}
