import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterText: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterText(state, action) {
      return { ...state, filterText: action.payload }
    }
  }
})

export const { setFilterText } = filterSlice.actions
export default filterSlice.reducer