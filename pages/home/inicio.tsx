import { Center, Grid } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ArticleCardVertical } from "../../components/Cards";
import Doc from "../../types/Doc";

export const Inicio = () => {
  const { data } = useSession();
  let autor = data?.user?.name;

  const url = "https://pf-api-sp.azurewebsites.net/docus/api/autor/" + autor;
  const [docus, setDocus] = useState<Array<Doc>>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  const recuperarDocs = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDocus(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    recuperarDocs().then(() => {
      setCargando(false);
    });
  }, [autor]);

  return cargando ? (
    <div className="loader" style={{ marginTop: "20%" }} />
  ) : (
    <>
      <Center style={{ marginLeft: "-20%" }}>
        <h1>Lista de tus documentos</h1>
      </Center>
      <Grid>
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
