import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FoodItem {
  name: string;
  qty: number;
}

const initialState: FoodItem[] = [
  { name: 'item1', qty: 0 },
  { name: 'item2', qty: 0 },
  { name: 'item2', qty: 0 },
];

export const FoodItemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const existingItem = state.find(item => item.name === name);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({name, qty: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const existingItem = state.find(item => item.name===name);
      if (existingItem && existingItem.qty > 0) {
        existingItem.qty-= 1;
      }
    },
  },
});
    
export const { addItem, removeItem } = FoodItemSlice.actions;
export default FoodItemSlice.reducer;
