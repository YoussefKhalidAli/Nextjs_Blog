import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boolean } from "yup";

export interface Post {
  id: number;
  title: string;
  body: string;
  image: string;
  dateCreated: Date;
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
      const isExists: number = state.posts.findIndex(
        (post) => post.title === action.payload.title
      );
      if (isExists >= 0) return;
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
