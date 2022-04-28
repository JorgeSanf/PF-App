import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppShell } from "@mantine/core";
import { NavbarSimple } from "../components/Navbar";
import { HeaderResponsive } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DocApp</title>
        <meta name="description" content="Aplicación documental" />
        <link rel="icon" href="/code.ico" />
      </Head>

      <AppShell header={<HeaderResponsive />} navbar={<NavbarSimple />}>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}

export default MyApp;
