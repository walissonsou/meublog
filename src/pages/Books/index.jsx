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
        <div key={books.id}>
              <li>
                <Link to="#" className={styles.link}>
                  <div className={styles.contentitem}>
                    <span>
                      <img
                        src="https://i.imgur.com/yDo4Jnu.jpeg"
                        alt="livro"
                        className={styles.image}
                      ></img>
                    </span>
                  </div>
                  <strong>Michelle Obama</strong>
                </Link>
                <p>Com uma vida repleta de realizações significativas, Michelle Obama se consolidou como uma das mulheres mais icônicas e cativantes de nosso tempo.</p>
                <div className={styles.rating}></div>
              </li>
            </div>
            <div key={books.id}>
              <li>
                <Link to="#" className={styles.link}>
                  <div className={styles.contentitem}>
                    <span>
                      <img
                        src="https://i.imgur.com/sia1K6a.jpeg"
                        alt="livro"
                        className={styles.image}
                      ></img>
                    </span>
                  </div>
                  <strong>Se não eu, quem vai fazer você feliz?</strong>
                </Link>
                <p>Um dos maiores ícones do rock nacional, Alexandre Magno Abrão, o Chorão, conquistou o Brasil sobretudo pela sua entrega na hora de compor e cantar.</p>
                <div className={styles.rating}></div>
              </li>
            </div>
            <div key={books.id}>
              <li>
                <Link to="#" className={styles.link}>
                  <div className={styles.contentitem}>
                    <span>
                      <img
                        src="https://i.imgur.com/PGx9Tcx.jpeg"
                        alt="livro"
                        className={styles.image}
                      ></img>
                    </span>
                  </div>
                  <strong>1808</strong>
                </Link>
                <p>A fuga da família real portuguesa para o Rio de Janeiro ocorreu num dos momentos mais apaixonantes e revolucionários do Brasil, de Portugal e do mundo. </p>
                <div className={styles.rating}></div>
              </li>
            </div>
            <div key={books.id}>
              <li>
                <Link to="#" className={styles.link}>
                  <div className={styles.contentitem}>
                    <span>
                      <img
                        src="https://i.imgur.com/lSYCej6.jpeg"
                        alt="livro"
                        className={styles.image}
                      ></img>
                    </span>
                  </div>
                  <strong>1822</strong>
                </Link>
                <p>Em 1822, o escritor compara diferentes relatos sobre o dia 7 de setembro que redefiniu os rumos do nosso país. Mais do que desmistificar o grito da independência às margens do Ipiranga, o escritor analisa como D. Pedro conseguiu, apesar de todas as dificuldades, fazer do Brasil uma nação de proporções monumentais.  </p>
                <div className={styles.rating}></div>
              </li>
            </div>
            <div key={books.id}>
              <li>
                <Link to="#" className={styles.link}>
                  <div className={styles.contentitem}>
                    <span>
                      <img
                        src="https://i.imgur.com/IFYRl4G.jpeg"
                        alt="livro"
                        className={styles.image}
                      ></img>
                    </span>
                  </div>
                  <strong>1889</strong>
                </Link>
                <p>Nas últimas semanas de 1889, a tripulação de um navio de guerra brasileiro ancorado no porto de Colombo, capital do Ceilão (atual Sri Lanka), foi pega de surpresa pelas notícias alarmantes que chegavam do outro lado do mundo.  </p>
                <div className={styles.rating}></div>
              </li>
            </div>
            <div key={books.id}>
              <li>
                <Link to="#" className={styles.link}>
                  <div className={styles.contentitem}>
                    <span>
                      <img
                        src="https://i.imgur.com/JMJ5SNi.jpg"
                        alt="livro"
                        className={styles.image}
                      ></img>
                    </span>
                  </div>
                  <strong>Uma breve história do tempo</strong>
                </Link>
                <p>Uma das mentes mais geniais do mundo moderno, Stephen Hawking guia o leitor na busca por respostas a algumas das maiores dúvidas da humanidade.</p>
                <div className={styles.rating}></div>
              </li>
            </div>
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
