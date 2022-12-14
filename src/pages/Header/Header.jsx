import styles from "./Header.module.css";
import Button from '../../components/Button/index'
export const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.headercontent}>
        <aside className={styles.homeheader}>
          <h2>
            Hey, meu nome é <span>Walisson</span>.
          </h2>
          <strong>
            Eu sou um Desenvolvedor Front-End . Este é o meu site pessoal - onde
            você encontrará <br /> todas as coisas em que estou pensando
            atualmente.{" "}
          </strong>
          <a href="/sobre">
          <Button name="Mais sobre mim">  </Button>
          </a>
         
        </aside>
      </div>
    </div>
  );
};
