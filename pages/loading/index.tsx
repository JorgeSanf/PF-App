import router from "next/router";
import React from "react";
import styles from "../../styles/Spinner.module.css";

export const DocLoad = () => {
  React.useEffect(() => {
    router.replace("/documentos");
  });

  return <div className={styles.loader} style={{ marginTop: "20%" }} />;
};

export default DocLoad;
