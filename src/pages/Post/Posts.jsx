import React from "react";
import styles from "./Posts.module.css";
import { useState, useEffect } from "react";


export default function Posts() {
  
  const [ posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, [])

  let page = 1

  const getPosts = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }

  const d = new Date("15 Apr 2015");

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
window.addEventListener('scroll', () => {
  const showLoader = () => {
    
  }

  const {clientHeight, scrollHeight, scrollTop} = document.documentElement

  const faltamPixelsParaAcabar =  scrollTop + clientHeight >= scrollHeight - 10

  if(faltamPixelsParaAcabar){
    showLoader()
  }
})
