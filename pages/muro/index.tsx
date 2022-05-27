import { Button, Grid, Input } from "@mantine/core";
import { useEffect, useState } from "react";
import recuperarMensajes from "../../functions/mensajes";
import { Mensaje } from "../types";
import MensajeSimple from "./Mensaje";

import TextEditor from "../../components/Editor";
import { relative } from "path";

export default function Muro() {
  const [mensajes, setMensajes] = useState<Array<Mensaje>>([]);

  const initialValue = "";
  const [value, onChange] = useState(""); //(initialValue)
  //const [titulo, setTitulo] = useState("");
  const onClickGuardar = () => {
    console.log(value);
    onChange(initialValue);
  };

  useEffect(() => {
    recuperarMensajes().then((msgs) => setMensajes(msgs));
  }, []);

  return mensajes.length == 0 ? (
    ""
  ) : (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "5%",
          zIndex: "1",
          left: "35%",
          boxShadow: "0px 0px 10px 0px rgb(200, 200, 200)",
          borderRadius: "10px",
          border: "1px solid rgb(210, 210, 210)",
        }}
      >
        {
          /*<Input></Input>*/
          //box shadow??
        }

        <TextEditor
          style={{
            width: "720px",
            height: "fill",
            minHeight: "200px",
            marginBottom: "5px",
          }}
          placeholder={"Deje una nota"}
          value={value}
          onChange={onChange}
          controls={[]}
          //onImageUpload={handleImageUpload}
        />
        <Button
          style={{ position: "relative", left: "45%", marginBottom: "5px" }}
          onClick={() => {
            //Guardar({ titol, topic, html, username });
            //setOpened(true);
            //estadoInicial();
            onClickGuardar();
          }}
        >
          Enviar
        </Button>
      </div>
      <Grid>
        {mensajes.map((msg) => {
          return (
            <Grid.Col span={3} key={msg.id}>
              <MensajeSimple mensaje={msg} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
}
