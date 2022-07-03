import React from "react";
import styles from "./Posts.module.css";

export default function Posts() {
  return (
    <>
      <header>
        <title> Posts | My Blog</title>
      </header>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="f">
            <time> 12 de maio </time>
            <strong> Titulo da página </strong>
            <p>
              Quando a gente começa a estudar o React, a ideia de poder ter
              estados guardados em cada componente abre muitas portas pra formas
              mais eficientes de se escrever aplicações em JavaScript.{" "}
            </p>
          </a>

          <a href="f">
            <time> 12 de maio </time>
            <strong> Titulo da página </strong>
            <p>
              Quando a gente começa a estudar o React, a ideia de poder ter
              estados guardados em cada componente abre muitas portas pra formas
              mais eficientes de se escrever aplicações em JavaScript.{" "}
            </p>
          </a>

          <a href="f">
            <time> 12 de maio </time>
            <strong> Titulo da página </strong>
            <p>
              Quando a gente começa a estudar o React, a ideia de poder ter
              estados guardados em cada componente abre muitas portas pra formas
              mais eficientes de se escrever aplicações em JavaScript.{" "}
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
