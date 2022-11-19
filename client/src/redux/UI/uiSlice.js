import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export default uiSlice.reducer;
export const { toggleSidebar } = uiSlice.actions;
