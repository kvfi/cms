import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bookmarkApi } from "components/bookmarks/api";
import websiteReducer from "store/website";

const reducer = combineReducers({
  website: websiteReducer,
  [bookmarkApi.reducerPath]: bookmarkApi.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookmarkApi.middleware),
});

setupListeners(store.dispatch);

export default store;
