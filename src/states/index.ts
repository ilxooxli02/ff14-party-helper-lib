import { configureStore } from "@reduxjs/toolkit";
import { layoutSlice } from "./reducers/layout";
import { sessionSlice } from "./reducers/session";

export const store = configureStore({
  reducer: {
    layout: layoutSlice.reducer,
    session: sessionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
