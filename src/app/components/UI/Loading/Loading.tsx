// Imported styles
import styles from "./Loading.module.css";

// Loading animation
const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <svg className={styles.squiggleLine} viewBox="0 0 100 20">
        <path d="M0,10 C20,0 40,20 60,10 80,0 100,20 120,10" />
      </svg>
      <svg className={styles.squiggleLine} viewBox="0 0 100 20">
        <path d="M0,10 C20,0 40,20 60,10 80,0 100,20 120,10" />
      </svg>
      <svg className={styles.squiggleLine} viewBox="0 0 100 20">
        <path d="M0,10 C20,0 40,20 60,10 80,0 100,20 120,10" />
      </svg>
    </div>
  );
};

export default Loading;
