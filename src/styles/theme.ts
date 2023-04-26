import { extendTheme } from "@chakra-ui/react";
import { Space_Grotesk } from 'next/font/google';

const space_grotesk = Space_Grotesk({ subsets: ['latin'] });

export const theme = extendTheme({
    fonts: {
        space_grotesk: space_grotesk.style.fontFamily,
    },
    textStyles: {
        navButton: {
            fontWeight: 'medium',
        },
    },
    colors: {
        black: "#000",
        primary: {
            500: '#000',
            700: '#555',
        },
        secondary: {
            500: '#FFF',
            700: '#EEE',
        }
    }
});