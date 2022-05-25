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

const useStyles = createStyles((theme) => ({
  wrapper: {
    margin: "5%",
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
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: FileCode,
    title: "Basado en TypeScript",
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: Moon,
    title: "Modo noche",
    description:
      "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
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
      <Grid gutter={80}>
        <Center>
          <Col span={12} md={8}>
            <Title className={classes.title} order={2}>
              Página construida con Next.js, React
            </Title>
            <Text color="dimmed">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <Button
              variant="gradient"
              gradient={{ deg: 133, from: "blue", to: "cyan" }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Inicie sesión
            </Button>
          </Col>
        </Center>
        <Center>
          <Col span={12} md={7}>
            <SimpleGrid
              cols={2}
              spacing={30}
              breakpoints={[{ maxWidth: "md", cols: 1 }]}
            >
              {items}
            </SimpleGrid>
          </Col>
        </Center>
      </Grid>
    </div>
  );
}
