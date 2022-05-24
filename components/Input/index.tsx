import { MultiSelect } from "@mantine/core";
import { useState, useEffect } from "react";

export function TagPicker() {
  const [cargando, setCargando] = useState(true);
  const [temas, setTemas] = useState<Array<string>>([]);
  const inicializar = async () => {
    const req = await fetch(
      `https://pf-api-sp.azurewebsites.net/docus/api/temas`
    );
    const data = await req.json();
    setTemas(data);
  };

  useEffect(() => {
    inicializar().then(() => {
      setCargando(false);
    });
  });

  return (
    <MultiSelect
      //label="Elige un tema"
      placeholder="Tema"
      data={temas}
      //searchable
      creatable
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(query) => setTemas((current) => [...current, query])}
      nothingFound="Nothing found..."
    />
  );
}
