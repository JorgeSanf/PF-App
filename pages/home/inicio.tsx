import { Center, Grid, Title } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ArticleCardVertical } from "../../components/Cards";
import { Doc } from "../types";
import styles from "../../styles/Spinner.module.css";
import { UserInfoAction as Perfil } from "../../components/Perfil";

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
      <br />
      <Center>
        <Perfil />
      </Center>
      <br />
      <Center style={{ marginLeft: "-150px" }}>
        {
          //, color: "#005555" }}
        }
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
    </>
  );
};

export default Inicio;
