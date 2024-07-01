import styles from "./CreatePostPage.module.css";

const CreatePostPage = () => {
  return (
    <form className={styles.createPostContainer}>
      <span>
        <label htmlFor="Image">Enter Image</label>
        <input type="file" />
      </span>
      <span>
        <label htmlFor="title">Enter Title</label>
        <input type="text" />
      </span>
      <span>
        <label htmlFor="content">Enter Content</label>
        <textarea name="content"></textarea>
      </span>
    </form>
  );
};

export default CreatePostPage;
