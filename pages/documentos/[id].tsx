import { useRouter } from "next/router";
import { Doc } from "../../types/Doc";

export default function Documento({ doc }: { doc: Doc }) {
  const router = useRouter();
  const { id } = router.query;
  return <p>{doc.titulo}</p>;
}

export async function getServerSideProps({ params }: any) {
  const req = await fetch(
    `https://pf-api-sp.azurewebsites.net/docus/api/id/${params.id}`
  );
  const data = await req.json();
  console.log(data);

  return {
    props: { doc: data },
  };
}
