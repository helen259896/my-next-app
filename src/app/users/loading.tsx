// import {Navbar} from '@/app/components/navbar';

// type user = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
// }

//server component fetch data
export default async function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2'></div>
    </div>
  )
}