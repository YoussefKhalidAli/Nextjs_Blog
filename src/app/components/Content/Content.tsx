"use client";

// Imported styles
import styles from "./Content.module.css";

// Imported utilities
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

// Interface for props
interface ContentProps {
  id: Number;
}

const Content = ({ id }: ContentProps) => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  // Find targeted post
  const index = posts.findIndex((post) => post.id == id);
  return (
    <div className={styles.content}>
      <img src={posts[index]?.image} />
      <h4>
        {posts[index]?.dateCreated.toJSON().slice(0, 10).replace(/-/g, "/")}
      </h4>
      <h2>{posts[index]?.title}</h2>
      <p>{posts[index]?.body}</p>
    </div>
  );
};

export default Content;
