import { useState } from "react";
import { Modal, Button, Group, Input, TextInput } from "@mantine/core";
import { Container } from "tabler-icons-react";
import { Guardar } from "./../../functions/guardar";
import { useSession } from "next-auth/react";

export function ModalGuardar({ html }: { html: string }) {
  const [opened, setOpened] = useState(false);
  const [titol, setTitol] = useState("");
  const [topic, setTopic] = useState("");

  const { data } = useSession();
  const username = data?.user?.name;

  const estadoInicial = () => {
    setTitol("");
    setTopic("");
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {
          <>
            <TextInput
              variant="default"
              placeholder="Título del documento"
              onChange={(e) => {
                setTitol(e.target.value);
              }}
            />
            <TextInput
              variant="default"
              placeholder="Tema del documento"
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                Guardar({ titol, topic, html, username });
                setOpened(false);
                estadoInicial();
              }}
            >
              Enviar
            </Button>
          </>
        }
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Guardar</Button>
      </Group>
    </>
  );
}

export default ModalGuardar;
