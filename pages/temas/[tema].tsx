import { Center, Grid } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Doc } from "../../types/Doc";

export default function Tema({ docs }: { docs: Array<Doc> }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ margin: "10px" }}>
      <Center style={{ marginLeft: "-20%" }}>
        <h2>Documentos sobre {docs[0].tema}</h2>
      </Center>
      <div style={{ margin: "10px" }}>
        <Grid>
          {docs.map((doc) => {
            return (
              <Grid.Col span={3} key={doc.id}>
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
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const req = await fetch(
    `https://pf-api-sp.azurewebsites.net/docus/api/tema/${params.tema}`
  );
  const data = await req.json();

  return {
    props: { docs: data },
  };
}

/*
export async function getServerSideProps({ params, ctx }: any) {
  const req = await fetch(
    `https://pf-api-sp.azurewebsites.net/docus/api/tema/${params.tema}`
  );
  const data = await req.json();
  const session = await getSession(ctx); //await getSession(ctx);

  console.log("yopa", session);

  return {
    props: { session, docs: data },
  };
}
*/
