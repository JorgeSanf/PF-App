import Document, { DocumentContext } from "next/document";
import { createGetInitialProps } from "@mantine/next";
import { getSession } from "next-auth/react";
import { getCookie } from "cookies-next";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
}

/*  
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const sesion = await getSession(ctx);

    const colorSchema = getCookie("mantine-color-scheme", ctx) || "light";

    // Add your app specific logic here

    return {
      ...initialProps,
      sesion,
      colorSchema,
    };
    }
 */
