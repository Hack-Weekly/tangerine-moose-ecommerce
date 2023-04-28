import { type AppType } from "next/app";
import Head from "next/head";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import NavBar from "~/components/NavBar";
import { CartProvider } from "~/contexts/cart";
import { theme } from "~/styles";
import { api } from "~/utils/api";

const App: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>TANGERINE</title>
            <meta name="description" content="Tangerine Moose Ecommerce App" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar />
          <Container as="main" maxW="container.xl">
            <Component {...pageProps} />
          </Container>
        </CartProvider>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(App);
