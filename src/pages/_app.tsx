import { type AppType } from "next/app";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import NavBar from "~/components/NavBar";
import { theme } from "~/styles";
import { api } from "~/utils/api";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const App: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <div className={spaceGrotesk.className}>
          <Head>
            <title>TANGERINE</title>
            <meta name="description" content="Tangerine Moose Ecommerce App" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar />
          <Container as="main" pt="98px" maxW={"1120px"}>
            <Component {...pageProps} />
          </Container>
        </div>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(App);
