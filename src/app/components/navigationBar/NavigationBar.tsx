// Imported styles
import styles from "./NavigationBar.module.css";

// Imported utilities
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <h1>Slash</h1>
      </Link>
    </div>
  );
}
