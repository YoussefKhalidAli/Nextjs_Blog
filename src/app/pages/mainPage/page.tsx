"use client";

// Imported styling
import CreatePostNavigator from "@/app/components/CreatePostNavigator/CreatePostNavigator";

// Imported utilities
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, postsActions } from "@/app/store/store";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// Imported components
import PostCard from "@/app/components/PostCard/PostCard";
import Loading from "@/app/components/UI/Loading/Loading";

// Image of a duck
const duck: string =
  "data:image/jpeg;base64,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";

// Interface of post from JSONplaceholder
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Fetch function
const fetchPost = async (): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Post = await response.json();
  data.body += ".";
  return data;
};

// Display main page
export default function MainPage() {
  const posts = useSelector((state: RootState) => state.posts.posts);

  const dispatch = useDispatch<AppDispatch>();

  // Fetch one post from JSONPlaceholder
  const { data, isLoading, isSuccess } = useQuery<Post, Error>({
    queryKey: ["post", 1],
    queryFn: fetchPost,
  });

  useEffect(() => {
    if (isSuccess && data) {
      // Add the post
      dispatch(
        postsActions.addPost({
          id: data.id,
          image: duck,
          title: data.title,
          body: data.body.repeat(20), // Make the body longer
          dateCreated: new Date(),
        })
      );
      console.log(data);
    }
  }, [isSuccess, data, dispatch]);

  return (
    <>
      <CreatePostNavigator />
      {isLoading ? (
        <Loading />
      ) : (
        posts?.map((post, index) => <PostCard key={index} post={post} />)
      )}
    </>
  );
}
