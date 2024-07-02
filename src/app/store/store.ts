import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  title: string;
  content: string;
  image: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: { posts: postsSlice.reducer },
});

export const postsActions = postsSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
