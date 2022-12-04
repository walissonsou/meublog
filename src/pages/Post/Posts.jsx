import React from "react";
import styles from "./Posts.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiposts } from "../../services/api";
export default function Posts() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().catch((err) => console.log(err));
  }, []);


  const getPosts = async () => {
    await apiposts.get('/')
      .then((res)  => setPosts(res.data));
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
                <button> <a 
                  onClick={() => handleNavigateToPost()} >
                  Ler mais
                </a>    </button>          
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
