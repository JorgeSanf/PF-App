import { Grid } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Doc } from "../../types/Doc";

export default function Tema({ docs }: { docs: Array<Doc> }) {
  const router = useRouter();
  const { id } = router.query;

  console.log(docs);

  return (
    <>
      <h2>Documentos sobre {docs[0].tema}</h2>
      <Grid>
        {docs.map((doc) => {
          return (
            <Grid.Col span={3}>
              <a href={"/documentos/" + doc.id}>
                <div
                  style={{
                    paddingLeft: "20px",
                    border: "solid 1px #dfe3ee",
                    borderRadius: "5px",
                  }}
                >
                  <h3>{doc.titulo}</h3>
                  <p>{doc.autor}</p>
                </div>
              </a>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  console.log(params.tema);
  const req = await fetch(
    `https://pf-api-sp.azurewebsites.net/docus/api/tema/${params.tema}`
  );
  const data = await req.json();

  return {
    props: { docs: data },
  };
}
