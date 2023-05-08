import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'Todo',
  initialState: {
    todo: [],
  },
  reducers: {
    add(state, action) {
      state.todo.push(action.payload);
    },
    remove(state, action) {
      const id = action.payload;

      state.todo = state.todo.filter(e => e.Id !== id);
    },
  },
});

export const todoAction = todoSlice.actions;
export default todoSlice;
