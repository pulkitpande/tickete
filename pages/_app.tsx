import type { AppProps } from "next/app";
import GlobalCSS from "@/src/styles/global";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/src/styles/theme";
import ContextProvider from "@/src/context";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" sizes="any" href="/icon.jpg" />
      </Head>
      <ContextProvider>
        <GlobalCSS />
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>
  );
}
