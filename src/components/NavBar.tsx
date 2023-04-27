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
          <Stack pb={4} display={{ lg: "none" }} spacing={4}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link key={link} href={"#"}>
                  {link}
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
