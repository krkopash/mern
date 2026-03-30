import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadState = () => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : undefined;  
};
const saveState = (state: any) => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadState(),
  },
});
store.subscribe(()=>{
  saveState(store.getState());
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;