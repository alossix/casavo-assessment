import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "../redux/builder";

export const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
