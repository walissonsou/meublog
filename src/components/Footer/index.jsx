import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.waves}>
        <div className={styles.wave} id={styles.wave1}>
          {" "}
        </div>
        <div className={styles.wave} id={styles.wave2}>
          {" "}
        </div>
        <div className={styles.wave} id={styles.wave3}>
          {" "}
        </div>
        <div className={styles.wave} id={styles.wave4}>
          {" "}
        </div>
      </div>
      <ol className={styles.socialicon}>
        <li>
          <a href="#">
            {" "}
            <ion-icon name="logo-facebook"></ion-icon>{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/walissons/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <ion-icon name="logo-instagram"></ion-icon>{" "}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/walisson-souza-7913b121a/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <ion-icon name="logo-linkedin"></ion-icon>{" "}
          </a>
        </li>
      </ol>
      <ol className={styles.menu}>
        <li>
          <a href="/"> Início </a>
        </li>
        <li>
          <a href="/sobre"> Sobre </a>
        </li>
        <li>
          <a href="/blog"> Blog </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/walisson-souza-7913b121a/"> Linkedin </a>
        </li>
      </ol>
      <p> © Walisson Souza 2022</p>
    </footer>
  );
};
export default Footer;
