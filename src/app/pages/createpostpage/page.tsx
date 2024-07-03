"use client";

// Imported utilites
import { Provider } from "react-redux";

// Imported redux store
import store from "@/app/store/store";

// Imported components
import CreatePostPage from "@/app/components/CreatePost/CreatePost"; // Adjust the path as needed

// Display create post page
const CreatePostRoute = () => {
  return (
    <Provider store={store}>
      <CreatePostPage />
    </Provider>
  );
};

export default CreatePostRoute;
