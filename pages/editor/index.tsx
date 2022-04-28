import { Button } from "@mantine/core";
import { useState } from "react";
import TextEditor from "../../components/Editor";
import {
  BlobServiceClient,
  HttpRequestBody,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

//import { RichTextEditor } from "@mantine/rte";

const Editor = () => {
  const initialValue = "<p><i>Comparta su <b>sabiduría</b>...</i></p>";
  const [value, onChange] = useState(initialValue);

  const guardarDoc = async () => {
    const htmldoc = "<!DOCTYPE html><html><body>" + value + "</body></html>";
    const blobSasUrl = "ah";
    const account = "dochtml";
    const url = "https://dochtml.blob.core.windows.net/";

    const body: HttpRequestBody = value;

    const blobServClient = new BlobServiceClient(url + blobSasUrl);
    console.log(blobServClient);
    const blobContClient = blobServClient.getContainerClient("$web");
    console.log(blobContClient);
    const response = blobContClient.uploadBlockBlob(
      "Prueba.html",
      body,
      Buffer.byteLength(value)
    );
    console.log(htmldoc);
  };

  return (
    <>
      <TextEditor
        style={{ height: "67%", width: "67%", marginLeft: "8%" }}
        value={value}
        onChange={onChange}
        //onImageUpload={handleImageUpload}
      />
      <Button
        onClick={guardarDoc}
        style={{ marginLeft: "60%", marginTop: "10px" }}
      >
        Guardar
      </Button>
    </>
  );
};

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
