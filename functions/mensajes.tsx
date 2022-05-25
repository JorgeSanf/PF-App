export default async function recuperarMensajes() {
  const url = "https://pf-api-sp.azurewebsites.net/docus/api/mensajes";
  const req = await fetch(url);
  const res = await req.json();

  return res;
}
