import React from "react";
import styles from "./Posts.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Posts() {
  const d = new Date("15 Apr 2015");
  const url = "https://jsonplaceholder.typicode.com/posts";

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().catch((err) => console.log(err));
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
          {posts.map((post) => {
            const handleNavigateToPost = () => {
              navigate(`${post.id}`, {
                state: { id: post.id, title: post.title, body: post.body },
              });
            };

            return (
              <div key={post.id} className={styles.postsu}>
                <div>
                  <time> </time>
                  <h2>{post.title} </h2>
                  <p>{post.body}</p>
                </div>
                <a 
                  onClick={() => handleNavigateToPost()} >
                  Ler mais
                </a>              
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
