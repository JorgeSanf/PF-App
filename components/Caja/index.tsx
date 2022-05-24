import { Alert, Box, Button, Modal, TextInput } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Guardar } from "../../functions/guardar";
import { TagPicker } from "../Input";

export default function Caja({
  html,
  onClickGuardar,
}: {
  html: string;
  onClickGuardar: any;
}) {
  const [titol, setTitol] = useState("Título");
  const [topic, setTopic] = useState("Tema");
  const [opened, setOpened] = useState(false);
  const { data } = useSession();
  const username = data?.user?.name;

  const estadoInicial = () => {
    setTitol("Título");
    setTopic("Tema");
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
        style={{ float: "right", marginTop: "50px", marginRight: "-18%" }}
        onClick={() => {
          Guardar({ titol, topic, html, username });
          setOpened(true);
          estadoInicial();
          onClickGuardar();
        }}
      >
        Enviar
      </Button>
      <br />
      <TextInput
        style={{ marginBottom: "10px" }}
        variant="default"
        placeholder={titol}
        onChange={(e) => {
          setTitol(e.target.value);
        }}
      />
      <TagPicker />
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
        withCloseButton={false}
      >
        Documento guardado
      </Modal>
    </div>
  );
}

/*
      <TextInput
        style={{ width: "90%", marginTop: "20px" }}
        variant="default"
        placeholder={topic}
        onChange={(e) => {
          setTopic(e.target.value);
        }}
      />
*/
