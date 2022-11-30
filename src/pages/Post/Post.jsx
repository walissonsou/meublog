import styles from "./Post.module.css";
import { useState, useEffect } from "react";

export default function Post() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  let id = 1
  
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, {});

  const getPost = async () => {
    await fetch(`${url}/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {post.map((post) => {
            return (
              <div key={post.id}>
                <h1> {post.title} </h1>
                <p> {post.body} </p>
              </div>
            );
          })}               
        </div>
      </div>
    </>
  );
}
