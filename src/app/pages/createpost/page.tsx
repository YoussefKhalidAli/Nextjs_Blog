"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, postsActions } from "../../store/store"; // Adjust import path accordingly

import styles from "./CreatePostPage.module.css";

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const imageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result.toString());
        } else {
          reject("Error converting image to base64");
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const base64 = await imageToBase64(file);
        setImage(base64);
      } catch (error) {
        console.error("Error converting image:", error);
      }
    }
  };

  const createPost = (event: FormEvent) => {
    event.preventDefault();
    dispatch(postsActions.addPost({ title, content, image }));
    setTitle("");
    setContent("");
    setImage("");
  };
  return (
    <form className={styles.createPostContainer} onSubmit={createPost}>
      <span>
        <label htmlFor="Image">Enter Image</label>
        <input type="file" onChange={handleImageUpload} />
      </span>
      <span>
        <label htmlFor="title">Enter Title</label>
        <input type="text" onChange={(event) => setTitle(event.target.value)} />
      </span>
      <span>
        <label htmlFor="content">Enter Content</label>
        <textarea
          name="content"
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </span>
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePostPage;
