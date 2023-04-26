import { type AppType } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";

const App: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <NavBar />
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(App);
