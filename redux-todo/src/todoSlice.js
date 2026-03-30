import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        addTodo: (state, action) => {
            state.push({id: Date.now(), text: action.payload, completed:false });
        },

        editTodo: (state, action) => {
            const { id, newtext } = action.payload;
            const todo = state.find(todo => todo.id ===id );
            if(todo){
                todo.text = newtext;
            }
        },  

        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id != action.payload)
        }

    }
});
export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;