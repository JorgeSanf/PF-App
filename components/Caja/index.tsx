import { Alert, Box, Button, Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import { Guardar } from "../../functions/guardar";

export default function Caja({ html }: { html: string }) {
  const [titol, setTitol] = useState("");
  const [topic, setTopic] = useState("");
  const [opened, setOpened] = useState(false);

  const estadoInicial = () => {
    setTitol("");
    setTopic("");
  };

  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        marginBottom: "20px",
        marginLeft: "18%",
      }}
    >
      <Button
        style={{ float: "right", marginTop: "50px" }}
        onClick={() => {
          Guardar({ titol, topic, html });
          estadoInicial();
          setOpened(true);
        }}
      >
        Enviar
      </Button>
      <br />
      <TextInput
        style={{ width: "75%" }}
        variant="default"
        placeholder="Título del documento"
        onChange={(e) => {
          setTitol(e.target.value);
        }}
      />
      <TextInput
        style={{ width: "75%", marginTop: "20px" }}
        variant="default"
        placeholder="Tema del documento"
        onChange={(e) => {
          setTopic(e.target.value);
        }}
      />
      <Modal
        style={{ position: "absolute", top: "25%" }}
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
      >
        Documento guardado
      </Modal>
    </div>
  );
}
