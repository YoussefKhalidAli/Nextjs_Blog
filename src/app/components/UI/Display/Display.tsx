// Imported styles
import styles from "./Display.module.css";

// Interface of props
interface DisplayProps {
  type: string;
  children: React.ReactNode;
}

const Display = ({ type, children }: DisplayProps) => {
  return (
    <div
      className={`${styles.display} ${
        type === "success" ? styles.success : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Display;
