import React, { useState, useEffect } from "react";
import styles from "./Books.module.css";
import { Link } from "react-router-dom";
import { apibook } from "../../services/api";
import bookcurrent from "../../assets/bookbfg.jpg";
import killmygiants from "../../assets/book1.jpg";

export const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().catch((err) => console.log({ err }));
  }, []);

  const getBooks = async () => {
    await apibook.get("livros").then((res) => setBooks(res.data));
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
      <h2> Lidos </h2>
      <ul className={styles.booklist}>
        {books?.map((books) => {
          return (
            <div key={books.id}>
              <li>
                <Link to="#" className={styles.link}>
                  <div className={styles.contentitem}>
                    <span>
                      <img
                        src={books.image}
                        alt="livro"
                        className={styles.image}
                      ></img>
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
      <ul className={styles.booklist}>
        <div className={styles.contentitem}>
          <span>
            <img src={bookcurrent} alt="livro" className={styles.image}></img>
          </span>
        </div>

        <strong>.</strong>
        <p>
          The BFG is no ordinary bone-crunching giant. He is far too nice and
          jumbly. It's lucky for Sophie that he is.
        </p>
      </ul>
      <ul className={styles.booklist}>
        <div className={styles.contentitem}>
          <span>
            <img src={killmygiants} alt="livro" className={styles.image}></img>
          </span>
        </div>

        <strong>.</strong>
        <p>
        This is a story about David, a young man who like many of us has giants ( or dreams ).
        </p>
      </ul>
    </div>
  );
};
