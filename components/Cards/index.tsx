import React from "react";
import { createStyles, Card, Image, Avatar, Text, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface ArticleCardVerticalProps {
  image?: string;
  category: string;
  title: string;
  date?: string;
  author: string;
}

export function ArticleCardVertical({
  category,
  title,
  author,
}: ArticleCardVerticalProps) {
  const { classes } = useStyles();

  const image = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${category.toLowerCase()}/${category.toLowerCase()}-original.svg`;
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} height={100} width={100} />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group spacing="xs" noWrap>
            <Text size="xs">{author}</Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
