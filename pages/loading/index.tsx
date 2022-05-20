import router from "next/router";
import React from "react";

export const docLoad = () => {
  React.useEffect(() => {
    router.replace("/documentos");
  });

  return <div className="loader" style={{ marginTop: "20%" }} />;
};

export default docLoad;
