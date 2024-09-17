import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  totalPrice: number
}

interface CartState {
  cart: CartItem[]
  quantity: number
}

const initialState: CartState = {
  cart: [],
  quantity: 0,
}

const cartSystem = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const findIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )
      if (findIndex >= 0) {
        state.cart[findIndex].quantity += 1
        state.cart[findIndex].totalPrice =
          state.cart[findIndex].quantity * state.cart[findIndex].price
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        }
        state.cart.push(newItem)
      }
      // state.quantity = state.cart.reduce(
      //   (total, item) => total + item.quantity,
      //   0
      // )
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload
      state.cart = state.cart.filter((item) => item.id !== itemIdToRemove)
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload
      const item = state.cart.find((item) => item.id === itemId)
      if (item) {
        item.quantity += 1
        item.totalPrice = item.quantity * item.price
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload
      const item = state.cart.find((item) => item.id === itemId)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        item.totalPrice = item.quantity * item.price
      }
    },
  },
})

export const {
  AddCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSystem.actions

export default cartSystem.reducer
