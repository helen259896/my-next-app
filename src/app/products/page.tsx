// import {Navbar} from '@/app/components/navbar';
// export const fetchCache = 'default-cache';

import { cookies } from "next/headers";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
}


 
//server component fetch data
export default async function ProductPage() {
  // await new Promise(resolve=> setTimeout(resolve, 3000))
  // const response1 = await fetch('http://localhost:3001/product/1');
  // const {product1} =  await response1.json();
  // const response1 = await fetch('http://localhost:3001/product/1', {
  //   cache: 'no-store',
  // });
  // const cookieStore = cookies();
  // (await cookieStore).get('theme');
  const response = await fetch('http://localhost:3001/product', {
    next: {
      revalidate: 10,
    }
  });
  const {products} =  await response.json();
  console.log('ProductPage page', products);
  // console.log('ProductPage page', posts);
  // console.log('ProductPage page', profile);
  
  return (
    <div>
      <div>This is Product Page</div>
      <div className="grid grid-cols-2 gap-2 p-4">
        {products.map((product: Product) => {
            return (
              <div key={product.id} className='flex item-center justify-between p-4 by-white shadow rounded-lg'>
                <div className="flex flex-col space-y-1">
                  <div className='text-lg font-semibold'>{product.id}</div>
                  <div className='text-sm'>{product.title}</div>
                </div>
                <div className="flex flex-col space-y-1 items-end">
                  <div className='text-md'>{product.price}</div>
                  <div className='text-md'>{product.description}</div>
                </div>
              </div>
          )
        })}
    </div>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   console.log('getServerSideProps', context);
//   const response = await fetch('http://localhost:3001/product', {
//     next: {
//       revalidate: 10,
//     }
//   });
//   const {products} =  await response.json();
//   return {
//     props: {
//       products,
//     }
//   }
// }