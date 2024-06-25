import { configureStore } from '@reduxjs/toolkit'
import useReducer from './Slices/userSlice'

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})