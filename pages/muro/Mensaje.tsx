import React, { useEffect } from "react";
import {
  createStyles,
  Text,
  Avatar,
  Group,
  Paper,
  Center,
  Divider,
} from "@mantine/core";
import { Mensaje } from "../../types/Mensaje";
import { useSession } from "next-auth/react";

const useStyles = createStyles((theme) => ({
  body: {
    paddingTop: theme.spacing.sm,
    textAlign: "justify",
  },

  head: {
    paddingLeft: theme.spacing.xs,
  },

  comment: {
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    width: "80%",
  },
}));

export default function MensajeSimple({ mensaje }: { mensaje: Mensaje }) {
  const { data } = useSession();
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="sm" className={classes.comment}>
      <Center>
        <Group>
          <Avatar src={"./code.svg"} alt="code" radius="xl" />
          <div>
            <Text size="sm">{mensaje.title}</Text>
            <Text size="xs" color="dimmed">
              {mensaje.author}
            </Text>
            <Text size="xs" color="dimmed">
              {mensaje.postedAt}
            </Text>
          </div>
        </Group>
      </Center>
      <Divider my="sm" />
      <Text className={classes.body} size="sm">
        {mensaje.body}
      </Text>
    </Paper>
  );
}
