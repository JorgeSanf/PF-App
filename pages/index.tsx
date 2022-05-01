import { Container } from "@mantine/core";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
//import Head from "next/head";
//import Image from "next/image";
//import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data } = useSession();
  return (
    <Container size="lg" style={{ marginLeft: "5%" }}>
      <p>Hola {data?.user?.name}</p>
    </Container>
  );
  //return <Layout />;
};

export default Home;

/*
    <div className={styles.container}>
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
*/
