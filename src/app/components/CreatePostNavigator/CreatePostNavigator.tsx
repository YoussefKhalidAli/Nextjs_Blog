import Link from "next/link";
import styles from "./CreatePostNavigator.module.css";

export default function CreatePostNavigator() {
  return (
    <div className={styles.createPostNavigator}>
      <h2>Have something share?</h2>
      <Link href="/pages/createpost">Create Post</Link>
    </div>
  );
}
