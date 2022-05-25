import React from "react";
import {
  createStyles,
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  Center,
  Divider,
} from "@mantine/core";
import { useSession } from "next-auth/react";
import { Mensaje } from "../../types/Mensaje";

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
  },

  body: {
    paddingLeft: 20,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    "& > p:last-child": {
      marginBottom: 0,
    },
  },
}));

export default function MensajeSimple({ mensaje }: { mensaje: Mensaje }) {
  const { data } = useSession();
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="sm" className={classes.comment}>
      <Group>
        <Avatar src={"./kanye18.webp"} alt="code" radius="xl" />
        <div>
          <Text size="sm">{mensaje.title}</Text>
          <Text size="xs" color="dimmed">
            {mensaje.author}
          </Text>
          {/* <Text size="xs" color="dimmed">
            {mensaje.postedAt}
          </Text> */}
        </div>
      </Group>
      <Divider my="sm" />
      <Text className={classes.body} size="sm">
        {mensaje.body}
      </Text>
    </Paper>
  );
}
