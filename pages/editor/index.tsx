import { useState } from "react";
import TextEditor from "../../components/Editor";

const Editor = () => {
  const initialValue = "<p>Comparta su <b>sabiduría</b></p>";
  const [value, onChange] = useState(initialValue);
  return (
    <TextEditor style={{ height: "50%" }} value={value} onChange={onChange} />
  );
};

export default Editor;
