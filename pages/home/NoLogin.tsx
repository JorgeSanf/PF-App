import React from "react";
import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  Center,
} from "@mantine/core";
import {
  ReceiptOff,
  Flame,
  CircleDotted,
  FileCode,
  Moon,
} from "tabler-icons-react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    margin: "3%",
    marginLeft: "-2%",
    //padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: ReceiptOff,
    title: "Documentos libres y gratuitos",
    description:
      "Los documentos de este sitio están abiertos para todo el mundo",
  },
  {
    icon: FileCode,
    title: "Centrado en la lectura",
    description: "Evite distracciones con una interfaz simple y limpia",
  },
  {
    icon: Moon,
    title: "Modo noche",
    description: "Para evitar molestias en los ojos",
  },
  {
    icon: Flame,
    title: "Rápido",
    description:
      "Mezcla las páginas estáticas con dinámicas, enrutamiento y SPA",
  },
];

export default function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Center style={{ marginBottom: "30px" }}>
        <Image src={"/docappo.png"} width="483" height="99" priority></Image>
      </Center>
      <Grid gutter={100}>
        <div style={{ margin: "auto" }}>
          <Col span={12} md={12}>
            <Title className={classes.title} order={6}>
              Página construida con Next.js, React
            </Title>
            <div style={{ textAlign: "center" }}>
              <Text color="dimmed">TypeScript, Mantine...</Text>

              <Button
                variant="gradient"
                gradient={{ deg: 133, from: "blue", to: "cyan" }}
                size="lg"
                radius="md"
                mt="xl"
                onClick={() => signIn()}
              >
                Inicie sesión
              </Button>
            </div>
          </Col>
        </div>
        <div style={{ margin: "auto" }}>
          <Col span={12} md={15}>
            <SimpleGrid
              cols={2}
              spacing={30}
              breakpoints={[{ maxWidth: "md", cols: 1 }]}
            >
              {items}
            </SimpleGrid>
          </Col>
        </div>
      </Grid>
    </div>
  );
}
