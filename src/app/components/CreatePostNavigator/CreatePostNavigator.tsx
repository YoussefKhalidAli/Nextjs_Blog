// Imported styles
import styles from "./CreatePostNavigator.module.css";

// Imported utilities
import Link from "next/link";

export default function CreatePostNavigator() {
  return (
    <div className={styles.createPostNavigator}>
      <h2>Have something share?</h2>
      <Link href="/pages/createpostpage">Create Post</Link>
    </div>
  );
}
