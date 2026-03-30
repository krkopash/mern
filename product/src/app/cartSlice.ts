import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({ name: "cart", initialState,
  reducers: {

    increaseQuantity: (state, action: PayloadAction<number>) => {
  const item = state.items.find(i=> i.id ===action.payload);
if(item){
  item.quantity+=1;
}
},

decreaseQuantity: (state, action: PayloadAction<number>) => {
  const item = state.items.find(i=>i.id === action.payload);
if(item && item.quantity> 1) {
    item.quantity -= 1;
  }
},
    addToCart: (state, action:PayloadAction<{id:number; name:string; price: number}>)=> {
      const item=state.items.find(i=> i.id=== action.payload.id);

      if (item) {
        item.quantity += 1;
      }
      else{
        state.items.push({...action.payload, quantity:1});
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i=> i.id!==action.payload);
    },
  },
});

export const { addToCart, removeFromCart , increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;