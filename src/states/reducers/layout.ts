import { createSlice } from "@reduxjs/toolkit";

export interface LayoutState {
  navigatedJustBefore: number;
}

const initialState: LayoutState = { navigatedJustBefore: 0 };

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    navigated(state) {
      state.navigatedJustBefore = state.navigatedJustBefore + 1;
    },
  },
});
