import { Container, Title, TypographyStylesProvider } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { Doc } from "../types";
import Image from "next/image";

type docHTML = {
  doc: Doc;
  html: string;
};

export default function Documento({ docu }: { docu: docHTML }) {
  const router = useRouter();
  const { id } = router.query;

  const srcImg = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${docu.doc.tema.toLowerCase()}/${docu.doc.tema.toLowerCase()}-original.svg`;

  return (
    <Container size="lg" style={{ marginLeft: "5%", marginBottom: "5%" }}>
      <div
        style={{
          marginLeft: "5%",
          marginTop: "2%",
          borderBottom: "1px solid #00b4b4",
          //borderRadius: "10px",
          padding: "2%",
          width: "80%",
        }}
      >
        <div style={{ float: "left", marginRight: "3%" }}>
          <Image
            height={"100%"}
            width={"100%"}
            src={srcImg}
            alt={docu.doc.tema}
          />
        </div>
        <Title order={6} style={{ color: "#00b4b4", marginBottom: "0%" }}>
          {docu.doc.tema.toUpperCase()}
        </Title>
        <Title
          order={1}
          style={{ marginTop: "0%", marginBottom: "0.5%", color: "#005555" }}
        >
          {docu.doc.titulo}
        </Title>
        <Title order={5} style={{ color: "#58b8b8" }}>
          {docu.doc.autor}
        </Title>
      </div>
      <br />
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: docu.html }} />
      </TypographyStylesProvider>
    </Container>
  );
}

export async function getServerSideProps({ params }: any) {
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

/*
export async function getServerSideProps({ params }: any) {
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
*/
