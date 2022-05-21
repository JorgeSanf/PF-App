import {
  Navbar,
  Group,
  Code,
  createStyles,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import {
  Notes,
  Home,
  Edit,
  UserCircle,
  Logout,
  FileCode,
  MoonStars,
  Sun,
} from "tabler-icons-react";
//import { Logo } from "./Logo";
import React, { useState } from "react";
import Link from "next/link";
//import { MantineLogo } from "../../shared/MantineLogo";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
//import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
      marginBottom: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },
  };
});

const items = [
  { link: "/", label: "Inicio", icon: Home },
  { link: "/editor", label: "Editor", icon: Edit },
  { link: "/loading", label: "Documentos", icon: Notes },
  { link: "/temas", label: "Temas", icon: FileCode },
];

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("");

  const { data: session } = useSession();
  const { data } = useSession();
  //const { height } = useViewportSize();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const links = items.map((item) => (
    <Link href={item.link} key={item.label}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active,
        })}
        onClick={(event) => {
          //event.preventDefault();
          setActive(item.label);
        }}
      >
        <item.icon className={classes.linkIcon} />
        <span>{item.label}</span>
      </a>
    </Link>
  ));

  return (
    <Navbar
      //style={{ height: "full" }}
      //height={"100vh"}
      width={{ sm: 300 }}
      p="md"
      fixed
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image src="/docappo2.png" width="161px" height="33px" alt="logo" />
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
        {links}
      </Navbar.Section>
      <Group>
        <Code sx={{ fontWeight: 700 }} style={{ marginLeft: "auto" }}>
          v0.4
        </Code>
      </Group>
      <Navbar.Section className={classes.footer}>
        {!session ? (
          <Link href={"/api/auth/signin"}>
            <a
              className={classes.link}
              //onClick={(event) => event.preventDefault()}
            >
              <UserCircle className={classes.linkIcon} />
              <span>Inicia sesión con GitHub</span>
            </a>
          </Link>
        ) : (
          <>
            <Link href={"/"}>
              <a
                className={classes.link}
                //onClick={(event) => event.preventDefault()}
              >
                <UserCircle className={classes.linkIcon} />
                <span>{data?.user?.name}</span>
              </a>
            </Link>
            <a
              href="#"
              className={classes.link}
              onClick={() => signOut()}
              //onClick={(event) => event.preventDefault()}
            >
              <Logout className={classes.linkIcon} />
              <span>Cerrar sesión</span>
            </a>
          </>
        )}
      </Navbar.Section>
    </Navbar>
  );
}
