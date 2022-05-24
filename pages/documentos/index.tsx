import { Center, Grid, Title } from "@mantine/core";
import { Doc } from "../../types/Doc";
import { ArticleCardVertical } from "./../../components/Cards";

interface ListaDocsProps {
  docs: Doc[];
}

export default function ListaDocumentos({ docs }: ListaDocsProps) {
  //{ docs: Doc[] }) {

  return (
    <>
      <Center
        style={{ marginLeft: "-125px", marginBottom: "2%", color: "#004040" }}
      >
        <Title order={1}>Lista de docs</Title>
      </Center>
      <Grid>
        {docs.map((doc: Doc) => {
          return (
            <Grid.Col span={3} key={doc.id}>
              <a href={"/documentos/" + doc.id}>
                <ArticleCardVertical
                  category={doc.tema}
                  title={doc.titulo}
                  author={doc.autor}
                />
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

/*
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
*/
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
