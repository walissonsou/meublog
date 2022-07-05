import React, { useState, useEffect } from "react";
import styles from "./Books.module.css";
import { Link } from "react-router-dom";
import { apibook } from "../../services/api";

export const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks()
    .catch((err) => console.log({ err }));
  }, []);

  const getBooks = async () => {
    await apibook
    .get("livros")
    .then((res) => setBooks(res.data))
  };
  
  return (
    <div className={styles.bookcontainer}>
      <div className={styles.bookcontent}>
        <h1> Books </h1>
        <p>
          Esta página contém livros que gosto com minhas notas, destaques e
          resenhas.
        </p>
      </div>
      <ul className={styles.booklist}>
        {books?.map((books) => {
          return (
            <div key={books.id}>
              <li>
              <Link to="#" className={styles.link}>
                  <div className={styles.contentitem}>
                    <span>                
                    <img src={books.image} alt="livro" className={styles.image}>                      
                      </img>
                    </span>
                  </div>
                  
                  <strong>{books.title}</strong>
                  </Link>
                  <p>{books.description} </p>
                  <div className={styles.rating}></div>
                
              </li>
            </div>
          );
        })}
      </ul>
      <h2> Lendo atualmente </h2>
      <ul className={styles.readcurrent}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
