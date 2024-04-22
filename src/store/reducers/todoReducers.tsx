import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {todoState, todoType} from '../../utils/types/todo_list';

const initialState: todoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoType[]>) => {
      action.payload.forEach(newTodo => {
        const existingTodo = state.todoList.some(
          todo => todo.id === newTodo.id,
        );
        if (!existingTodo) {
          state.todoList.push(newTodo);
        } else {
          console.log('Todo with the same id already exists!');
        }
      });
    },
    addCompleteTodo: (state, action: PayloadAction<todoType>) => {
      const {id, status} = action.payload;
      const todoToUpdate = state.todoList.find(todo => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.status = !status;
      }
    },
  },
});

export const {addTodo, addCompleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
