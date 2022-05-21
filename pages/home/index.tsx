import { Title } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import Inicio from "./inicio";
import styles from "../../styles/Signin.module.css";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return <Inicio />;
    //<>Poner los documentos de uno aquí, y la opción de borrarlos</>;
  }
  return (
    <>
      <NoLogin />
    </>
  );
}

/*
  if (session) {
    return (
      <>
        Signed in as <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
*/
import { InferGetServerSidePropsType } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, getProviders } from "next-auth/react";
import Image from "next/image";

const NoLogin = () => {
  return (
    <div
      style={{
        overflow: "visible",
        position: "relative",
      }}
    >
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardContent}>
            <Title order={2}>Inicie sesión</Title> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

//export default Signin;

/*
import { Title } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import Inicio from "./inicio";
import styles from "../../styles/Signin.module.css";

export default function Home({
  csrfToken,
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();
  if (session) {
    return <Inicio />;
    //<>Poner los documentos de uno aquí, y la opción de borrarlos</>;
  }
  return (
    <>
      <Signin providers={providers} csrfToken={csrfToken} />
    </>
  );
}

/*
  if (session) {
    return (
      <>
        Signed in as <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
*/
/*
import { InferGetServerSidePropsType } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, getProviders } from "next-auth/react";
import Image from "next/image";

const Signin = ({
  csrfToken,
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardContent}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Title order={2}>Inicie sesión</Title> <br />
            {providers &&
              Object.values(providers).map((provider) => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <button onClick={() => signIn(provider.id)}>
                    {provider.name}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//export default Signin;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
*/
