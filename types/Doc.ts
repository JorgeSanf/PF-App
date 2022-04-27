export type Doc = {
  id: string;
  tema: string;
  titulo: string;
  autor: string;
  texto?: string;
  entradas?: entrada[];
};

export type entrada = {
  titulo: string;
  contenido: string;
}

export default Doc;