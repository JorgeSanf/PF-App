import { Button } from "@mantine/core";
import { useState } from "react";
import TextEditor from "../../components/Editor";

const Editor = () => {
  const initialValue = "<p><i>Comparta su <b>sabiduría</b>...</i></p>";
  const [value, onChange] = useState(initialValue);
  return (
    <>
      <TextEditor
        style={{ height: "67%", width: "67%", marginLeft: "8%" }}
        value={value}
        onChange={onChange}
      />
      <Button style={{ marginLeft: "60%", marginTop: "10px" }}>Guardar</Button>
    </>
  );
};

export default Editor;

// Alinear en el centro desde el div
