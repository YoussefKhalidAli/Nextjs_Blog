// Imported styles
import Link from "next/link";
import styles from "./PostCard.module.css";

// Imported interface
import { Post } from "@/app/store/store";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  // Summarize th body of the post to add to PostCard
  let body: string = "";
  const firstSentence: string = post.body.split(".")[0];
  if (firstSentence.length > 200) body = post.body.substring(0, 200);
  else body = firstSentence + ".";

  return (
    <Link href={`/pages/contentpage/${post.id}`} className={styles.post}>
      <img src={post.image} />
      <span>
        <h1>{post.title}</h1>
        <h6>{post.dateCreated.toJSON().slice(0, 10).replace(/-/g, "/")}</h6>
        <p>{body}</p>
      </span>
    </Link>
  );
};

export default PostCard;
