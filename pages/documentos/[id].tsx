import { Container, TypographyStylesProvider } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Doc } from "../../types/Doc";

type docHTML = {
  doc: Doc;
  html: string;
};

export default function Documento({ docu }: { docu: docHTML }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container size="lg" style={{ marginLeft: "5%" }}>
      <div>
        <h1>{docu.doc.titulo}</h1>
        <h3>{docu.doc.tema}</h3>
        <h3>{docu.doc.autor}</h3>
        <br />
      </div>

      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: docu.html }} />
      </TypographyStylesProvider>
    </Container>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://pf-api-sp.azurewebsites.net/docus/api");
  const documentos = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = documentos.map((doc: Doc) => ({
    params: { id: doc.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const req = await fetch(
    `https://pf-api-sp.azurewebsites.net/docus/api/id/${params.id}`
  );
  const data = await req.json();
  const fetchHtml = await fetch(data.enlace);
  const fHtml = await fetchHtml.text();
  const docu = { doc: data, html: fHtml };

  return {
    props: { docu },
  };
}
