// import {ServeCOne} from '@/app/components/serveCOne';
import { ClientCOne } from "../components/clientCOne";
import { ServeCOne } from "../components/serveCOne";

export default function InterleavingPage() {
  return (
    <>
      <h1 >Interleaving Page</h1>
      {/* <ServeCOne /> */}
      <ClientCOne >
        <ServeCOne />
      </ClientCOne >
      
    </>
  )
}