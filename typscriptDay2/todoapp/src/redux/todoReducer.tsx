import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todo',
    initialState: { value: [{ title: 'learn Ts', status: true }] },
    reducers: {
        AddTodos: (state, action) => {
            state.value.push(action.payload)
        }
    }
})


export default todoSlice.reducer;

export const { AddTodos } = todoSlice.actions;