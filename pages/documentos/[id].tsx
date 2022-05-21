import { Container, Title, TypographyStylesProvider } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Doc } from "../../types/Doc";
import Image from "next/image";

export default function Documento() {
  //{ doc }: { doc: Doc }
  const router = useRouter();
  const { id } = router.query;
  const [html, setHtml] = useState<any>();
  const [cargando, setCargando] = useState<boolean>(true);

  const [json, setJson] = useState<Doc>({
    id: "",
    titulo: "",
    tema: "",
    autor: "",
    enlace: "",
  });

  const recuperarJson = async () => {
    const req = await fetch(
      "https://pf-api-sp.azurewebsites.net/docus/api/id/" + id
    );
    const data = await req.json();
    setJson(data);
    console.log(data);
    return data;
  };

  const recuperarHTML = async (jsond: Doc) => {
    const resp = await fetch(jsond.enlace);
    resp.text().then((text) => {
      setHtml(text);
    });
  };

  const inicializar = async () => {
    const jsond = await recuperarJson();
    await recuperarHTML(jsond);
  };

  useEffect(() => {
    //fetch(doc.enlace).then((response) => ;
    inicializar().then(() => {
      setCargando(false);
    });
  }, [id]);

  const srcImg = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${json.tema.toLowerCase()}/${json.tema.toLowerCase()}-original.svg`;

  return cargando ? (
    ""
  ) : (
    <Container size="lg" style={{ marginLeft: "5%", marginBottom: "5%" }}>
      <div
        style={{
          marginLeft: "5%",
          marginTop: "2%",
          borderBottom: "1px solid #00b4b4",
          padding: "2%",
          width: "80%",
        }}
      >
        <div style={{ float: "left", marginRight: "3%" }}>
          <Image height={"100%"} width={"100%"} src={srcImg} alt={json.tema} />
        </div>
        <Title order={6} style={{ color: "#00b4b4", marginBottom: "0%" }}>
          {json.tema.toUpperCase()}
        </Title>
        <Title
          order={1}
          style={{ marginTop: "0%", marginBottom: "0.5%", color: "#004040" }}
        >
          {json.titulo}
        </Title>
        <Title order={5} style={{ color: "#58b8b8" }}>
          {json.autor}
        </Title>
      </div>
      <br />
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TypographyStylesProvider>
    </Container>
  );
}

/*export async function getServerSideProps({ params }: any) {
  const req = await fetch(
    `https://pf-api-sp.azurewebsites.net/docus/api/id/${params.id}`
  );
  const data = await req.json();

  return {
    props: { doc: data },
  };
}*/
