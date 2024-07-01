// Imported styling
import CreatePostNavigator from "@/components/CreatePostNavigator/CreatePostNavigator";

// Imported utilities
import Link from "next/link";

import NavigationBar from "@/components/navigationBar/NavigationBar";
import PostCard from "@/components/PostCard/PostCard";

export default function MainPage() {
  return (
    <>
      <CreatePostNavigator />
      <PostCard />
    </>
  );
}
