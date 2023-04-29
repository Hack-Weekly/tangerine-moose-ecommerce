import { Space_Grotesk } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const theme = extendTheme({
  fonts: {
    heading: space_grotesk.style.fontFamily,
    body: space_grotesk.style.fontFamily,
  },
  textStyles: {
    navButton: {
      fontWeight: "medium",
    },
  },
  colors: {
    primary: {
      500: "#000",
      700: "#555",
    },
    secondary: {
      500: "#FFF",
      700: "#EEE",
    },
  },
});
