import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: `'Space Grotesk', sans-serif`,
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