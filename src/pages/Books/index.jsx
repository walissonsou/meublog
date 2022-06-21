import React from "react";
import styles from "./Books.module.css";
import book from "../../assets/book.jpg";
import { Link } from "react-router-dom";

export const Books = () => {
  return (
    <div className={styles.bookcontainer}>
      <div className={styles.bookcontent}>
        <h1>Books </h1>
        <p>
          Esta página contém livros que gosto com minhas notas, destaques e
          resenhas.
          <span>Sort by:</span>
          <label> Search </label>
        </p>
      </div>
      <ul className={styles.booklist}>
        <li>
          <Link to="#" className={styles.link}>
            <div className={styles.contentitem}>
              <span>
                <span></span>
                <img src={book} alt="livro" className={styles.image}></img>
              </span>
            </div>
            <strong>Michelle Obama</strong>
            <p>Michelle Obama </p>
            <div className={styles.rating}></div>
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.link}>
            <div className={styles.contentitem}>
              <span>
                <span></span>
                <img src={book} alt="livro" className={styles.image}></img>
              </span>
            </div>
            <strong>Michelle Obama</strong>
            <p>Michelle Obama </p>
            <div className={styles.rating}></div>
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.link}>
            <div className={styles.contentitem}>
              <span>
                <span></span>
                <img src={book} alt="livro" className={styles.image}></img>
              </span>
            </div>
            <strong>Michelle Obama</strong>
            <p>Michelle Obama </p>
            <div className={styles.rating}></div>
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.link}>
            <div className={styles.contentitem}>
              <span>
                <span></span>
                <img src={book} alt="livro" className={styles.image}></img>
              </span>
            </div>
            <strong>Michelle Obama</strong>
            <p>Michelle Obama </p>
            <div className={styles.rating}></div>
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.link}>
            <div className={styles.contentitem}>
              <span>
                <span></span>
                <img src={book} alt="livro" className={styles.image}></img>
              </span>
            </div>
            <strong>Michelle Obama</strong>
            <p>Michelle Obama </p>
            <div className={styles.rating}></div>
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.link}>
            <div className={styles.contentitem}>
              <span>
                <span></span>
                <img src={book} alt="livro" className={styles.image}></img>
              </span>
            </div>
            <strong>Michelle Obama</strong>
            <p>Michelle Obama </p>
            <div className={styles.rating}></div>
          </Link>
        </li>
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
