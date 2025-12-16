import React, {Suspense} from 'react';
import Product from '@/app/components/product';
import Reviews from '@/app/components/reviews';
import SliderPage from '@/app/components/slide';


export default function ProductDetailPage() {
  // const theme = cookieStore;
  // console.log('About this server component', cookieStore);
  return (
    <div>

      <div>About Page {new Date().toLocaleTimeString()}</div>
      <SliderPage/>
      <Suspense fallback={<p>loading product detail...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>loading review page</p>}>
        <Reviews />
      </Suspense>

    </div>
  )
}