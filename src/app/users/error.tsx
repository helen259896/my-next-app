'use client';
import { useEffect } from "react";
//server component fetch data
export default async function ErrorPage({error}: {error: Error}) {
  useEffect(() => {
    console.log(`${error}`)
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className='text-2xl text-red-500'>Error fetching data</div>
    </div>
  )
}