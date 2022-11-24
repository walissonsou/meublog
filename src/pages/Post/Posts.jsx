import React from "react";
import styles from "./Posts.module.css";
import { useState, useEffect } from "react";


export default function Posts() {
  
  const [ posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, [])
  
  const getPosts = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }

  let dataLongOutput = new Date("Jan 29, 2020");

  return (
    <>
      <header>
        <title> Posts | My Blog</title>
      </header>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((posts) => {
            return (
              <div key={posts.id}>
                <a href="/blog">
                  <time> </time>
                  <strong>{posts.title} </strong>
                  <p>{posts.body}</p>
                </a>
              </div>            
            );            
          })}         
        </div>
      </main>
    </>
  );
}
