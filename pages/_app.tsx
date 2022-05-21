import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { NavbarSimple } from "../components/Navbar";
import { getSession, SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { getCookie, setCookies } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";

export default function DocApp(
  props: AppProps & { colorScheme: ColorScheme; sesion: Session } //& { session: Session }
) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );
  const [sesion, setSesion] = useState<Session>(props.sesion);

  useEffect(() => {
    getSession().then((sesio) => (sesio ? setSesion(sesio) : ""));
  }, []);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookies("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Head>
        <title>DocApp</title>
        <meta name="description" content="Aplicación documental" />
        <link rel="icon" href="/code.ico" />
      </Head>

      <SessionProvider session={props.sesion}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <AppShell
              style={{ marginLeft: 300 }}
              navbar={
                <NavbarSimple />
                /*header={<HeaderResponsive />}*/
              }
            >
              <Component {...pageProps} />
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      </SessionProvider>
    </>
  );
}

DocApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
  //session: getSession(),
});
/*
      <SessionProvider session={pageProps.session} refetchInterval={0}>
      </SessionProvider>
*/
