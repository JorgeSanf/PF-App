import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import recuperarMensajes from "../../functions/mensajes";
import { Mensaje } from "../../types/Mensaje";
import MensajeSimple from "./Mensaje";

export default function () {
  const [mensajes, setMensajes] = useState<Array<Mensaje>>([]);

  useEffect(() => {
    recuperarMensajes().then((msgs) => setMensajes(msgs));
  }, []);

  return mensajes.length == 0 ? (
    ""
  ) : (
    <Grid>
      {mensajes.map((msg) => {
        return (
          <Grid.Col span={3} key={msg.id}>
            <MensajeSimple mensaje={msg} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
