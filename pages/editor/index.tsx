import { useState } from "react";
import TextEditor from "../../components/Editor";
import { Container } from "tabler-icons-react";
//import { ModalGuardar } from "./../../components/Modal";
import Caja from "../../components/Caja";
import { useSession } from "next-auth/react";

//import { RichTextEditor } from "@mantine/rte";

const Editor = () => {
  const initialValue = "<p><i>Comparta su <b>sabiduría</b>...</i></p>";
  const [value, onChange] = useState(initialValue);
  //const [titulo, setTitulo] = useState("");
  const onClickGuardar = () => {
    onChange(initialValue);
  };
  //let titulo = '';
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <h1 style={{ paddingLeft: "33%" }}>Crea un documento</h1>
          <Caja html={value} onClickGuardar={onClickGuardar} />
        </>
      ) : (
        <br />
      )}
      <TextEditor
        style={{
          minHeight: "55%",
          width: "67%",
          margin: "5%",
          marginLeft: "10%",
        }}
        value={value}
        onChange={onChange}
        //onImageUpload={handleImageUpload}
      />
    </>
  );
};

//<ModalGuardar html={value} />

export default Editor;

/*
const handleImageUpload = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const enlace = "";
    const formData = new FormData();
    formData.append("image", file);

    console.log(formData);

    fetch(enlace, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => resolve(result.data.url))
      .catch(() => reject(new Error("Upload failed")));
  });
*/
// Alinear en el centro desde el div

// Example with imgbb.com, usually you would use similar logic to upload to S3 like storages
// Function must return a promise that resolves with uploaded image url
// After promise is resolved blurred image placeholder with be replaced with uploaded
