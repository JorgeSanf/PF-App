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
import { JssProvider, createGenerateId } from "react-jss";
import React from "react";
import { useColorScheme } from "@mantine/hooks";

interface DocProps extends AppProps {
  colorScheme: ColorScheme;
}

/*export default function DocApp(
  { Component, pageProps: { session, ...pageProps }, colorScheme }: DocProps //& { session: Session }
) {
  //const { Component, pageProps } = props;
  const [colorSchema, setColorScheme] = useState<ColorScheme>(colorScheme);

  //const [sesion, setSesion] = useState<Session>(pageProps.session);

  /*useEffect(() => {
    getSession().then((sesio) => (sesio ? setSesion(sesio) : ""));
  }, []);*/
export default function DocApp(
  props: AppProps & { colorScheme: ColorScheme; sesion: Session } //& { session: Session }
) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );
  //const [sesion, setSesion] = useState<Session>(props.sesion);

  /*useEffect(() => {
    getSession().then((sesio) => (sesio ? setSesion(sesio) : ""));
  }, []);*/

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
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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

DocApp.getInitialProps = async ({
  ctx,
}: {
  ctx: GetServerSidePropsContext;
}) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
  session: await getSession(),
});
/*
      <SessionProvider session={pageProps.session} refetchInterval={0}>
      </SessionProvider>
*/
/*const sessionCookies = async () => {
    const ses = await getSession();

    if (ses != undefined) {
      setCookies("sesio", props.sesion, {
        maxAge: 60 * 60 * 24 * 30,
      });
    }
  };
  session: getCookie("sesio", ctx), //await getSession(),*/
