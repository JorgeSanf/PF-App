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
            <p>{doc.titulo}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {//getServerSideProps() {
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
