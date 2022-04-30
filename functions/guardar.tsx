import { BlobServiceClient } from "@azure/storage-blob";

interface GuardarBlobProps {
  html: string;
  topic: string;
  titol: string;
}

export function Guardar({ html, topic, titol }: GuardarBlobProps) {
  const link = `https://dochtml.blob.core.windows.net/$web/${titol}.html`;

  const guardarBlob = async () => {
    const htmldoc =
      '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html;charset=utf-8" /></head><body>' +
      html +
      "</body></html>";
    const blobSasUrl =
      "?sv=2020-08-04&ss=bfqt&srt=co&sp=rwdlacutfx&se=2022-04-30T22:13:12Z&st=2022-04-30T14:13:12Z&spr=https&sig=n5ZBLGt7iSwaN09Az8tgejqLGrR4VU8Xx80LqEbQ6hk%3D";
    const url = "https://dochtml.blob.core.windows.net/";
    const body = htmldoc;

    const blobServClient = new BlobServiceClient(url + blobSasUrl);
    const blobContClient = blobServClient.getContainerClient("$web");
    const response = blobContClient.uploadBlockBlob(
      `${titol}.html`,
      body,
      Buffer.byteLength(body),
      { blobHTTPHeaders: { blobContentType: "HTML" } }
    );
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      titulo: titol,
      tema: topic,
      enlace: link,
      autor: "Jorge",
    }),
  };

  const guardarDoc = () => {
    fetch("https://pf-api-sp.azurewebsites.net/docus/api/add", requestOptions);
  };

  guardarBlob();
  guardarDoc();
}
