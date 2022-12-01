import React from "react";
import styles from "./Posts.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Posts() {
  const d = new Date("15 Apr 2015");
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  let page = 1;
  const getPosts = async () => {
    await fetch(`${url}?_limit=5&_page=${page}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };
  return (
    <>
      <header>
        <title> Posts | My Blog</title>
      </header>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((posts) => {
            return (
              <div key={posts.id} className={styles.postsu}>
                <div>
                  <time> </time>
                  <h2>{posts.title} </h2>
                  <p>{posts.body}</p>
                  </div>
                <Link to={`/posts/${posts.id}`}> Ler mais </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
