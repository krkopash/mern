import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import  foodItemsReducer  from './features/items'

export default configureStore({
  reducer: {
    counter: counterSlice, 
    foodItems: foodItemsReducer,
  },
})