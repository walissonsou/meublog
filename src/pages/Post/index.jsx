import styles from "./Post.module.css";
import { useState, useEffect } from "react";

export default function Post() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, {});

  const getPost = async () => {
    await fetch(`${url}/1`)
      .then((res) => res.json())
      .then((data) => setPost(data));
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

          <button onClick={()=> getPost()}> Clique aqui para obter o post </button>
        </div>
      </div>
    </>
  );
}
