// 'use client'

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useRouter } from 'next/navigation'
// import { AddCart } from '@/reduxx/todosSlice'
// import { Product } from '@/interfaces/product.interface'
// import { useSelector } from 'react-redux'
// const Home: React.FC = () => {
//   const dispatch = useDispatch()
//   const cart = useSelector((state: any) => state)
//   console.log('cart1', cart)
//   // Updated `additems` to dispatch the full product object instead of just `id`
//   const additems = (product: any) => {
//     console.log('product>>>', product)
//     dispatch(AddCart(product))
//   }

//   const [data, setData] = useState<Product[]>([])
//   const router = useRouter()

//   // Fetching product data on component mount
//   useEffect(() => {
//     axios
//       .get<Product[]>('https://fakestoreapi.com/products')
//       .then((response) => {
//         setData(response.data)
//       })
//       .catch((err) => {
//         console.error('Failed to fetch products:', err)
//       })
//   }, [])

//   return (
//     <div className='max-w-7xl mx-auto p-4'>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  '>
//         {data.slice(0, 20).map((product) => (
//           <div
//             className='bg-white border border-black rounded-lg overflow-hidden  p-4 hover:border-r-4 hover:border-b-4 '
//             key={product.id}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className='w-full h-48 object-contain'
//             />
//             <div className='text-sm mt-2'>
//               <p className='text-gray-600'>
//                 {product.description.length > 100
//                   ? `${product.description.substring(0, 100)}...`
//                   : product.description}
//               </p>
//               <h5 className='font-bold text-gray-600 pt-1'>
//                 Rating: {product.rating.rate}, Count: {product.rating.count}
//               </h5>
//               <h5 className='font-bold text-gray-600 pt-1'>
//                 Title:{' '}
//                 {product.title.length > 15
//                   ? `${product.title.substring(0, 15)}...`
//                   : product.title}
//               </h5>
//               <p className='text-gray-600 font-bold'>{product.category}</p>
//             </div>
//             <h5 className='font-bold text-2xl mt-2'>
//               <sup>$</sup>
//               {product.price}
//             </h5>
//             <div className='flex justify-between mt-4'>
//               <button
//                 className='bg-orange text-white border border-black text-sm py-2 px-4 font-bold rounded'
//                 onClick={() => additems(product)} // Passing the full product object
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import Login from '../(auth)/login/page'

function page() {
  return (
    <div>
      <Login />
    </div>
  )
}

export default page
