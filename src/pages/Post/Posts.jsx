import React from "react";
import styles from "./Posts.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiposts } from "../../services/api";
import Button from "../../components/Button/index";

export default function Posts() {
  const navigate = useNavigate();

  
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [itensPage, setItensPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(posts.length / itensPage)
  const startIndex = (currentPage * itensPage)
  const endedIndex = (startIndex + itensPage)  
  const currentItens = posts.slice(startIndex, endedIndex)


  useEffect(() => {
    getPosts().catch((err) => console.log(err));
  }, []);

  const getPosts = async () => {
    await apiposts.get("/").then((res) => setPosts(res.data));
  };

  const filtredPosts = posts.filter((post) => post.title.includes(search));


  

  return (
    <>
      <header>
        <title> Posts | My Blog</title>
        
      <select value={itensPage} onChange={(e) => setItensPage(Number(e.target.value))}>
        <option value={5} > 5  </option>
        <option value={10} > 10 </option>
        <option value={15} > 15 </option>
        <option value={20} > 20 </option>
      </select>
      <div> 
      {Array.from(Array(pages), (item, index ) => {
        return  <button value={index} onClick={(e) => setCurrentPage(e.target.value)} > {index + 1} </button> })}  
      </div>
      </header>
      <main className={styles.container}>
        <input
          name="search"
          type="text"
          placeholder="Buscar post..."
          onChange={(e) => setSearch(e.target.value).uppercase()}
          value={search}
        ></input>

        {search.length > 0 ? (
          <div className={styles.posts}>
            {filtredPosts.map((post) => {
              const handleNavigateToPost = () => {
                navigate(`${post.id}`, {
                  state: { id: post.id, title: post.title, body: post.body },
                });
              };

              return (
                <div key={post.id} className={styles.postsu}>
                  <div>
                    <h2>{post.title} </h2>
                    <p>{post.body}</p>
                  </div>
                  <Button name="Ler Mais">
                    <a onClick={() => handleNavigateToPost()}></a>
                  </Button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.posts}>
            {currentItens.map((post) => {
              const handleNavigateToPost = () => {
                navigate(`${post.id}`, {
                  state: { id: post.id, title: post.title, body: post.body },
                });
              };

              return (
                <div key={post.id} className={styles.postsu}>
                  <div>
                    <h2>{post.title} </h2>
                    <p>{post.body}</p>
                  </div>

                  <button className={styles.buttonabout}>
                    <a onClick={() => handleNavigateToPost()}>Ler mais</a>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
