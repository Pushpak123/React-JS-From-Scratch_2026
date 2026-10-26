

import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./personSlice";

const store = configureStore({
  reducer: {
    persons: personSlice,
  },
});

export default store;
