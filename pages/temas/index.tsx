import { Grid } from "@mantine/core";
import Image from "next/image";
import { doc } from "prettier";
import { useState } from "react";

export default function Documentos({ temas }: { temas: Array<string> }) {
  return (
    <Grid>
      {temas.map((tema) => {
        const srcImg = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tema.toLowerCase()}/${tema.toLowerCase()}-original.svg`;
        return tema != "Prueba" ? (
          <Grid.Col span={2} style={{ margin: "10px" }}>
            <a href={"/temas/" + tema} key={tema}>
              <Image height={"150%"} width={"150%"} src={srcImg} alt={tema} />
            </a>
          </Grid.Col>
        ) : (
          <p>{tema}</p>
        );
      })}
    </Grid>
  );
}

export async function getStaticProps() {
  try {
    const url = "https://pf-api-sp.azurewebsites.net/docus/api/temas";
    const response = await fetch(url);
    const data = await response.json();

    return {
      props: {
        temas: data,
      },
    };
  } catch {
    console.log("fallo fetch");
    return {
      props: {
        temas: [],
      },
    };
  }
}
