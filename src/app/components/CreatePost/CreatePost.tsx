"use client";

// Imported styles
import styles from "./CreatePost.module.css";

// Imported utilities
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, postsActions } from "../../store/store"; // Adjust import path accordingly

// Imported components
import Display from "../UI/Display/Display";

const CreatePost = () => {
  const [created, setCreated] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const dispatch = useDispatch<AppDispatch>();

  // Transform image to base64
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
        // Check image type
        const validTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!validTypes.includes(file.type)) {
          throw new Error("Only JPEG, PNG, and GIF images are allowed.");
        }

        // Check image size (less than 5MB)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error("Image size exceeds 5MB limit.");
        }

        const base64 = await imageToBase64(file);
        setImage(base64);
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: "",
        }));
      } catch (error: any) {
        console.error("Error uploading image:", error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: error.message,
        }));
      }
    }
  };

  // Validate the form inputs
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!title.trim()) {
      errors.title = "Title is required";
    }
    if (!body.trim()) {
      errors.body = "Content is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const createPost = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      const dateCreated: Date = new Date();
      dispatch(
        postsActions.addPost({
          id: Math.random() * 10 + dateCreated.getTime(),
          title,
          body,
          image,
          dateCreated,
        })
      );
      // Reset the values
      setTitle("");
      setBody("");
      setImage("");
      // Display message and remove after 5 seconds
      setCreated(true);
      setTimeout(() => {
        setCreated(false);
      }, 5000);
    } else {
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  };
  return (
    <form className={styles.createPostContainer} onSubmit={createPost}>
      <span>
        <label htmlFor="Image">Enter Image</label>
        <input
          type="file"
          className={errors.image ? styles.error : ""}
          onChange={handleImageUpload}
        />
        {errors.image && <span>{errors.image}</span>}
      </span>
      <span>
        <label htmlFor="title">Enter Title</label>
        <input
          type="text"
          value={title}
          className={errors.title ? styles.error : ""}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && <span>{errors.title}</span>}
      </span>
      <span>
        <label htmlFor="content">Enter Content</label>
        <textarea
          name="body"
          value={body}
          className={errors.body ? styles.error : ""}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        {errors.body && <span>{errors.body}</span>}
      </span>
      <button type="submit">Post</button>
      {created && (
        <Display type="success">
          {" "}
          Post added successfully. Return to main page to view it or add a new
          post
        </Display>
      )}
    </form>
  );
};

export default CreatePost;
