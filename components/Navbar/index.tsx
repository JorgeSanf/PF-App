import { Navbar, Group, Code, createStyles } from "@mantine/core";
import {
  Notes,
  Home,
  Edit,
  UserCircle,
  Logout,
  FileCode,
} from "tabler-icons-react";
//import { Logo } from "./Logo";
import React, { useState } from "react";
import Link from "next/link";
//import { MantineLogo } from "../../shared/MantineLogo";

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
      marginBottom: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
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

const data = [
  { link: "/", label: "Inicio", icon: Home },
  { link: "/editor", label: "Editor", icon: Edit },
  { link: "/documentos", label: "Documentos", icon: Notes },
  { link: "/temas", label: "Temas", icon: FileCode },
];

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
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
    <Navbar style={{ height: "full" }} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <p>Menú</p>
          <Code sx={{ fontWeight: 700 }}>v0.1</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <UserCircle className={classes.linkIcon} />
          <span>Perfil</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <Logout className={classes.linkIcon} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
/*const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function NavbarNested() {
  const { classes } = useStyles();
  let items;
  let links;
  const [temas, setTemas] = useState<string[]>([]);

  const generarItems = () => {
    const linkTemas = temas.map((item: string) => {
      return { label: item, link: `/tema/${item}` };
    });

    items = [
      { label: "Inicio", icon: Home }, //, enlace: "/inicio"
      { label: "Editor", icon: Edit }, //, enlace: "/editor"
      {
        label: "Temas",
        icon: Notes,
        links: linkTemas,
      },
    ];

    links = items.map((item) => {
      return <p>{item.label}</p>;
      //return <LinksGroup {...item} key={item.label} />;
    });
  };

  useEffect(() => {
    const url = "https://pf-api-sp.azurewebsites.net/docus/api/temas";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTemas(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    generarItems();
  }, []);

  console.log(items);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <p>Logo width={120} /</p>
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>pppp{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}

/*export async function getServerSideProps() {
  const url = "https://pf-api-sp.azurewebsites.net/docus/api/temas";
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  return {
    props: {
      temas: data,
    },
  };
}

const mockdata = [
  { label: "Dashboard", icon: Gauge, enlace: "/" },
  {
    label: "Market news",
    icon: Notes,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: CalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Analytics", icon: PresentationAnalytics },
  { label: "Contracts", icon: FileAnalytics },
  { label: "Settings", icon: Adjustments },
  {
    label: "Security",
    icon: Lock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];*/

/*
      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section>
*/

/*
(item) =>
      item.enlace == null ? (
        <p>{item.label}</p>
      ) : (
        <a href={item.enlace}>
          <p>{item.label}</p>
        </a>
      )
      */
