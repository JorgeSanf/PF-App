import { BlobServiceClient } from "@azure/storage-blob";

interface GuardarBlobProps {
  html: string;
  topic: string;
  titol: string;
}

export function Guardar({ html, topic, titol }: GuardarBlobProps) {
  const link = `https://dochtml.blob.core.windows.net/$web/${titol}.html`;

  console.log(titol, topic, html);

  const guardarBlob = async () => {
    const htmldoc = "<!DOCTYPE html><html><body>" + html + "</body></html>";
    const blobSasUrl =
      "?sv=2020-08-04&ss=bfqt&srt=co&sp=rwdlacutfx&se=2022-04-30T00:34:48Z&st=2022-04-29T16:34:48Z&spr=https&sig=kcEQDMyEHDuQAcFVoqHKSF1KFB9WxPBjNi7MzyCw48U%3D";
    const url = "https://dochtml.blob.core.windows.net/";
    const body = html;

    const blobServClient = new BlobServiceClient(url + blobSasUrl);
    console.log(blobServClient);
    const blobContClient = blobServClient.getContainerClient("$web");
    console.log(blobContClient);
    const response = blobContClient.uploadBlockBlob(
      `${titol}.html`,
      body,
      Buffer.byteLength(html),
      { blobHTTPHeaders: { blobContentType: "HTML" } }
    );
    console.log(htmldoc);
    console.log(response);
  };

  console.log(link);

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
    fetch(
      "https://pf-api-sp.azurewebsites.net/docus/api/add",
      requestOptions
    ).then((response) => console.log(response));
    //.then((response) => response.json());
    //.then((data) => console.log(data));
  };

  guardarBlob();
  guardarDoc();
}
