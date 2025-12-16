






export default async function ProductDetailPage({params} : {params: {id: string}}) {
  // await new Promise(resolve=> setTimeout(resolve, 3000))
  const {id} = await params;
   
  const response = await fetch(`http://localhost:3001/products/${id}`);
  const product =  await response.json();
  console.log('ProductPage page', id);
  console.log('ProductPage page', product);
  
  // console.log('ProductPage page', products);
  // console.log('ProductPage page', posts);
  // console.log('ProductPage page', profile);
  
  return (
    <div>
      <div>This is Product detail Page</div>
      <div className="grid grid-cols-2 gap-2 p-4">
        <div key={product.id} className='flex item-center justify-between p-5 by-white shadow rounded-lg'>
          <div className="flex flex-col space-y-1">
            <div className='text-lg font-semibold'>{product.id}</div>
            <div className='text-sm'>{product.title}</div>
          </div>
          <div className="flex flex-col space-y-1 items-end">
            <div className='text-md'>{product.price}</div>
            <div className='text-md'>{product.description}</div>
          </div>
        </div>
    </div>
    </div>
  )
}