import { Alert, Box, Button, Modal, TextInput } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Guardar } from "../../functions/guardar";
import { TagPicker } from "../Input";
import styles from "../../styles/Home.module.css";

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
    <div className={styles.caja}>
      <h1 style={{ margin: "auto", textAlign: "center" }}>Crea un documento</h1>
      <br />
      <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
        <Button
          style={{ float: "right", marginRight: "2%", marginTop: "2%" }}
          onClick={() => {
            Guardar({ titol, topic, html, username });
            setOpened(true);
            estadoInicial();
            onClickGuardar();
          }}
        >
          Enviar
        </Button>
        <TextInput
          style={{ marginBottom: "10px", width: "80%" }}
          variant="default"
          placeholder={titol}
          onChange={(e) => {
            setTitol(e.target.value);
          }}
        />
        <TextInput
          style={{ marginBottom: "10px", width: "80%" }}
          variant="default"
          placeholder={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        />
      </div>
      {/*<TagPicker />*/}

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
