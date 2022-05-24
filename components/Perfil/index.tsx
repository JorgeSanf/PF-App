import React from "react";
import { Avatar, Text, Button, Paper, Center } from "@mantine/core";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

interface UserInfoActionProps {
  avatar: string;
  name: string;
  email: string;
}

export function UserInfoAction() {
  //{ avatar, name, email }: UserInfoActionProps) {
  const img =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
  const { data } = useSession();

  return (
    <Paper
      style={{ width: "400px", marginLeft: "-150px" }}
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar
        src={data?.user?.image}
        size={120}
        radius={120}
        mx="auto"
        style={{ float: "left" }}
      />
      <Text align="center" size="lg" weight={500} mt="md">
        {data?.user?.name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {data?.user?.email}
      </Text>
      <Center>
        <Text
          align="center"
          color="dimmed"
          size="sm"
          style={{ marginRight: "5px" }}
        >
          Visita tu perfil:
        </Text>
        <Link href={"https://github.com/" + data?.user?.name}>
          <a
            target="_blank"
            //onClick={(event) => event.preventDefault()}
          >
            <Image src={img} height={20} width={20} alt="github" />
          </a>
        </Link>
      </Center>
    </Paper>
  );
}
