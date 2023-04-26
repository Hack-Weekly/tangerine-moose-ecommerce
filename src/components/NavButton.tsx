import type { ReactNode } from "react";
import { Link } from "@chakra-ui/next-js";

const NavButton = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    border={"1px solid transparent"}
    rounded={"md"}
    textColor={"#000"}
    textStyle={"navButton"}
    transitionDuration={"300ms"}
    _hover={{
      textDecoration: "none",
      border: "1px solid black",
    }}
    _focusVisible={{
      outline: "none",
      textDecoration: "none",
      border: "1px solid black",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default NavButton;
