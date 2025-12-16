import 'server-only';
import { serverSideFunction } from "@/app/utils/server-utils";
// import { clientSideFunction } from "@/app/utils/client-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  // const clientResult = serverSideFunction();

  return (
    <>
      <h1>Server Route Page</h1>
      <p>{result}</p>
    </>
  )
}