import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Doc } from "../../types/Doc";

export default function Tema({ docs }: { docs: Array<Doc> }) {
  const router = useRouter();
  const { id } = router.query;

  console.log(docs);

  return (
    <>
      {docs.map((doc) => {
        return (
          <div key={doc.id}>
            <a href={"/documentos/" + doc.id}>
              <h3>{doc.titulo}</h3>
              <p>{doc.autor}</p>
            </a>
          </div>
        );
      })}
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
