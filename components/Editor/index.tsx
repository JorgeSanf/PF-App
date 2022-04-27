import dynamic from "next/dynamic";

export default dynamic(() => import("@mantine/rte"), {
  // Disable during server side rendering
  ssr: false,

  // Render anything as fallback on server, e.g. loader or html content without editor
  loading: () => null,
});

/*
import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

const initialValue = "<p>Comparta su <b>sabiduría</b></p>";

export default function TextEditor() {
  const [value, onChange] = useState(initialValue);
  return (
    <RichTextEditor
      style={{ height: "50%" }}
      value={value}
      onChange={onChange}
    />
  );
}
*/
