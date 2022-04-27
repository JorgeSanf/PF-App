export default function Documentos({ temas }: { temas: Array<String> }) {
  return (
    <>
      {temas.map((tema) => {
        return <p>{tema}</p>;
      })}
    </>
  );
}

export async function getServerSideProps() {
  const url = "https://pf-api-sp.azurewebsites.net/docus/api/temas";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      temas: data,
    },
  };
}
