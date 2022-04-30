import { Container, TypographyStylesProvider } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Doc } from "../../types/Doc";

export default function Documento({ doc }: { doc: Doc }) {
  const router = useRouter();
  const { id } = router.query;
  const [html, setHtml] = useState<any>();

  useEffect(() => {
    //fetch(doc.enlace).then((response) => ;
    const recuperarHTML = async () => {
      const resp = await fetch(doc.enlace);
      resp.text().then((text) => {
        setHtml(text);
      });
    };
    recuperarHTML();
  }, []);

  return (
    <Container size="lg" style={{ marginLeft: "5%" }}>
      <div style={{ marginLeft: "5%" }}>
        <h1>{doc.titulo}</h1>
        <h3>{doc.tema}</h3>
        <h3>{doc.autor}</h3>
      </div>

      <TypographyStylesProvider>
        {" "}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TypographyStylesProvider>
    </Container>
  );
}

export async function getServerSideProps({ params }: any) {
  const req = await fetch(
    `https://pf-api-sp.azurewebsites.net/docus/api/id/${params.id}`
  );
  const data = await req.json();

  return {
    props: { doc: data },
  };
}
