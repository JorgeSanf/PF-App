import { useSession, signIn, signOut } from "next-auth/react";
import Inicio from "./inicio";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return <Inicio />;
    //<>Poner los documentos de uno aquí, y la opción de borrarlos</>;
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
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
