import { Grid } from "@mantine/core";
import { Doc } from "../../types/Doc";

interface ListaDocsProps {
  docs: Doc[];
}

export default function ListaDocumentos({ docs }: ListaDocsProps) {
  //{ docs: Doc[] }) {

  return (
    <>
      <h1>Lista de docs</h1>
      <Grid>
        {docs.map((doc: Doc) => {
          return (
            /*<div
              key={doc.id}
              style={{
                border: "solid 1px #dfe3ee",
                borderRadius: "5px",
                width: "20%",
                margin: "2%",
                float: "left",
              }}
            >*/
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

export async function getServerSideProps() {
  const url = "https://pf-api-sp.azurewebsites.net/docus/api";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return {
      props: {
        docs: data,
      },
    };
  } catch {
    console.log("fallo fetch");
    return {
      props: {
        docs: [],
      },
    };
  }
}
