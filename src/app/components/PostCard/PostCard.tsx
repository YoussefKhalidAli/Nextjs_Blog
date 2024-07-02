// Imported styles
import styles from "./PostCard.module.css";

import { Post } from "@/app/store/store";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles.post}>
      <img src={post.image} />
      <span>
        <h1>{post.title}</h1>
        <h5>author</h5>
        <h6>Date</h6>
        <p>{post.content}</p>
      </span>
    </div>
  );
};

export default PostCard;
