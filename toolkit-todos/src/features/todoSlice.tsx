import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

const initialState: Todo[] = []

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: uuidv4(),
                title: action.payload,
                completed: false
            }
            state.push(newTodo)
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload)
        }
    }
})

export default todoSlice.reducer;

export const { addTodo, deleteTodo } = todoSlice.actions;
