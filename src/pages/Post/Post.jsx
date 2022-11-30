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
      .then((data) => console.log(data));
  };

  return (
    <>
      <a href="/blog"><button onClick={()=> getPost()}>Ambiente em manutenção, desculpe pelo transtorno.</button></a>
      <img alt="Readme" title="Readme" src="https://rafaelherculano.com.br/assets/images/busy.gif" />

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
