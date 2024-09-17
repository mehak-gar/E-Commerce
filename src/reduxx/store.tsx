import { configureStore } from '@reduxjs/toolkit'
import Slice from './todosSlice'

const store = configureStore({
  reducer: {
    AllCart: Slice,
  },
})
export default store

