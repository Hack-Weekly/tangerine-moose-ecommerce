import { Space_Grotesk } from "next/font/google";
import { extendTheme, type ComponentStyleConfig, type ThemeOverride } from "@chakra-ui/react";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

const closeButton: ComponentStyleConfig["baseStyle"] = {
  variant: "outline",
  colorScheme: "secondary",
  borderRadius: 0,
  borderWidth: "1px",
  borderColor: "transparent",
  _hover: {
    bg: "none",
    borderColor: "primary.500",
  },
};

const overlay: ComponentStyleConfig["baseStyle"] = {
  backdropFilter: "auto",
  backdropBlur: "2px",
};

const dialog: ComponentStyleConfig["baseStyle"] = {
  borderRadius: 0,
  borderWidth: 1,
  borderColor: "primary.500",
};

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
  components: {
    Modal: {
      baseStyle: {
        dialog,
        overlay,
        closeButton,
      },
    },
    Drawer: {
      baseStyle: {
        dialog,
        overlay,
        closeButton,
      },
    },
  },
} as ThemeOverride);
