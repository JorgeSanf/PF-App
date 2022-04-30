import React from "react";
import { createStyles, Card, Image, Text, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

interface CardWithStatsProps {
  image: string;
  title: string;
  description?: string;
}

export function CardWithStats({
  image,
  title,
  description,
}: CardWithStatsProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder p="lg" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={200} />
      </Card.Section>

      <Group position="apart" mt="xl">
        <Text size="sm" weight={700} className={classes.title}>
          {title}
        </Text>
      </Group>
      <Text mt="sm" mb="md" color="dimmed" size="xs">
        {description}
      </Text>
    </Card>
  );
}
