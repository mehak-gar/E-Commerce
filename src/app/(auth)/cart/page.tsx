// 'use client'
// import React, { createContext, useContext, useState, ReactNode } from 'react'

// interface CartItem {
//   id: number
//   title: string
//   price: number
//   quantity: number
// }

// interface CartContextType {
//   cart: CartItem[]
//   addToCart: (item: CartItem) => void
//   removeFromCart: (id: number) => void
//   updateQuantity: (id: number, quantity: number) => void
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([])

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((i) => i.id === item.id)
//       if (existingItem) {
//         return prevCart.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         )
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }]
//       }
//     })
//   }

//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id))
//   }

//   const updateQuantity = (id: number, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
//     )
//   }

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider')
//   }
//   return context
// }

// export default CartProvider
'use client'
import { Product } from '@/interfaces/product.interface'
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from '@/reduxx/todosSlice'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined'
import { ClassNames } from '@emotion/react'
import Link from 'next/link'

const page = () => {
  const cart = useSelector((state: any) => state.AllCart.cart || [])
  console.log('cart2', cart)
  const dispatch = useDispatch()
  const addQty = (id: number) => dispatch(increaseQuantity(id))
  const subQty = (id: number) => dispatch(decreaseQuantity(id))
  const rmveitm = (id: number) => dispatch(removeItemFromCart(id))

  return (
    <div>
      <div className='max-w-7xl mx-auto p-4'>
        <i>
          <Link
            href='/home'
            className=' text-black justify-center grid inline-grid p-2 items-center hover:bg-orange hover:text-white rounded-full'
          >
            <KeyboardReturnOutlinedIcon />
          </Link>
        </i>
        <h1 className='text-2xl font-bold'>Shopping Cart</h1>
        {cart?.length === 0 ? (
          <p className=' lg: m-40 p-5 text-center text-gray-500 text-lg font-medium py-4 shadow'>
            Your cart is empty
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5'>
            {cart.slice(0, 20).map((product: any) => (
              <div
                className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg p-4'
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-full h-48 object-contain'
                />
                <div className='text-sm mt-2'>
                  <p className='text-gray-600'>
                    {product.description.length > 100
                      ? `${product.description.substring(0, 100)}...`
                      : product.description}
                  </p>
                  <h5 className='font-bold text-gray-600 pt-1'>
                    Rating: {product.rating.rate}, Count: {product.rating.count}
                  </h5>
                  <h5 className='font-bold text-gray-600 pt-1'>
                    Title:{' '}
                    {product.title.length > 15
                      ? `${product.title.substring(0, 15)}...`
                      : product.title}
                  </h5>
                  <p className='text-gray-600 font-bold'>{product.category}</p>
                </div>
                <h5 className='font-bold text-2xl mt-2'>
                  <sup>$</sup>
                  Price: ${product.totalPrice.toFixed(1)}
                </h5>
                <div className=' flex mt-4 gap-3'>
                  <button
                    onClick={() => addQty(product.id)}
                    className='bg-orange border rounded p-2 font-bold'
                  >
                    +
                  </button>
                  <span className='mt-3'>{product.quantity}</span>
                  <button
                    onClick={() => subQty(product.id)}
                    className='bg-orange border rounded p-2 font-bold'
                  >
                    -
                  </button>

                  <span onClick={() => rmveitm(product.id)}>
                    <DeleteForeverIcon />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default page
