"use client";

// Imported styling
import CreatePostNavigator from "@/app/components/CreatePostNavigator/CreatePostNavigator";

// Imported components
import PostCard from "@/app/components/PostCard/PostCard";

// Imported utilities
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function MainPage() {
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <>
      <CreatePostNavigator />
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </>
  );
}
