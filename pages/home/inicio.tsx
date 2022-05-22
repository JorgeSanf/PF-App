import { Center, Grid, Title } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ArticleCardVertical } from "../../components/Cards";
import Doc from "../../types/Doc";
import styles from "../../styles/Spinner.module.css";
import TextEditor from "../../components/Editor";

export const Inicio = () => {
  const { data } = useSession();
  const [docus, setDocus] = useState<Array<Doc>>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    let autor = data?.user?.name;
    const url = "https://pf-api-sp.azurewebsites.net/docus/api/autor/" + autor;

    const recuperarDocs = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDocus(data);
      } catch (error) {
        console.log(error);
      }
    };

    recuperarDocs().then(() => {
      setCargando(false);
    });
  }, []);

  return cargando ? (
    <div className={styles.loader} style={{ marginTop: "20%" }} />
  ) : (
    <>
      <Center style={{ marginLeft: "-20%", color: "#005555" }}>
        <h1>Tu lista de documentos</h1>
      </Center>
      <Grid style={{ padding: "2%" }}>
        {docus.map((doc: Doc) => {
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
      <br />
      <Center style={{ marginLeft: "-20%", color: "#006565" }}>
        <Title order={2}>Prueba el editor</Title>
      </Center>
      <Center>
        <TextEditor
          style={{
            minHeight: "200px",
            width: "67%",
            margin: "2%",
            marginLeft: "-10%",
            marginBottom: "1%",
          }}
          value={""}
          onChange={() => console.log()}
        />
      </Center>
    </>
  );
};

export default Inicio;
