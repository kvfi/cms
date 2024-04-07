import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
};

export const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { setTitle, setDescription } = websiteSlice.actions;

export default websiteSlice.reducer;
