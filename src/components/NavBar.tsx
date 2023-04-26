"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { AbsoluteCenter, Box, Flex, HStack, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

import { ActionButton } from "./Button";
import NavButton from "./NavButton";

const Links = ["Coffee", "Tea", "Equipment", "About us"];

export default function NavBar() {
  const { data: sessionData } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as={"header"} position={"fixed"} w={"100%"}>
      <Box w={"100%"} px={4} m={4} border={"1px solid black"} bg={"white"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={{ md: "none" }}>
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
          <HStack as={"nav"} spacing={1} alignItems={"center"} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavButton key={link}>{link}</NavButton>
            ))}
          </HStack>
          <AbsoluteCenter axis={"horizontal"}>
            <Link
              fontWeight={"bold"}
              fontSize={"4xl"}
              href={"#"}
              _focusVisible={{ outline: "none", textDecoration: "underline" }}
            >
              TANGERINE
            </Link>
          </AbsoluteCenter>
          <Box display={{ base: "none", md: "flex" }}>
            <ActionButton onClick={sessionData ? () => void signOut() : () => void signIn()}>
              {sessionData ? "Sign out" : "Sign in"}
            </ActionButton>
          </Box>
        </Flex>
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link textColor={"#000"} key={link} href={"#"}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
