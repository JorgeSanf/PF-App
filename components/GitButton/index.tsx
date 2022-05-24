import { ButtonProps, Button } from "@mantine/core";
import { MarkGithubIcon } from "@primer/octicons-react";

export function GithubButton(props: ButtonProps<"button">) {
  return (
    <Button
      style={{ width: 280 }}
      {...props}
      leftIcon={<MarkGithubIcon />}
      sx={(theme) => ({
        backgroundColor:
          theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        color: "#fff",
        "&:hover": {
          backgroundColor:
            theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        },
      })}
    />
  );
}
