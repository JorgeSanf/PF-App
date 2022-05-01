import { BlobServiceClient } from "@azure/storage-blob";
import { useSession } from "next-auth/react";

interface GuardarBlobProps {
  html: string;
  topic: string;
  titol: string;
  username: any;
}

export function Guardar({ html, topic, titol, username }: GuardarBlobProps) {
  const link = `https://dochtml.blob.core.windows.net/$web/${titol}.html`;

  const guardarBlob = async () => {
    const htmldoc =
      '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html;charset=utf-8" /></head><body>' +
      html +
      "</body></html>";
    const blobSasUrl =
      "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacutfx&se=2022-05-01T04:14:32Z&st=2022-05-01T02:14:32Z&spr=https&sig=L0tBU6EzzWusQYeWD6uT6t6FPNRQ8vOKmLSIxOXi6k0%3D";
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
      autor: username,
    }),
  };

  const guardarDoc = () => {
    fetch("https://pf-api-sp.azurewebsites.net/docus/api/add", requestOptions);
  };

  guardarBlob();
  guardarDoc();
}
