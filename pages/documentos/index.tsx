import { Doc } from "../../types/Doc";

interface ListaDocsProps {
  docs: Doc[];
}

export default function ListaDocumentos({ docs }: ListaDocsProps) {
  //{ docs: Doc[] }) {

  return (
    <>
      <h1>Lista de docs</h1>
      {docs.map((doc: Doc) => {
        return (
          <div key={doc.id}>
            <a href={"/documentos/" + doc.id}>{doc.titulo}</a>
          </div>
        );
      })}
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
