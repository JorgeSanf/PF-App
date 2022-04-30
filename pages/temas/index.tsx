import Image from "next/image";

export default function Documentos({ temas }: { temas: Array<string> }) {
  return (
    <>
      {temas.map((tema) => {
        return tema != "Prueba" ? (
          <a href={"/temas/" + tema} style={{ margin: "50px" }}>
            <Image
              height={"200%"}
              width={"200%"}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tema.toLowerCase()}/${tema.toLowerCase()}-original.svg`}
              //src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tema.toLowerCase()}/${tema.toLowerCase()}-plain.svg`}
              alt={tema}
            />
          </a>
        ) : (
          <p>{tema}</p>
        );
      })}
    </>
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
