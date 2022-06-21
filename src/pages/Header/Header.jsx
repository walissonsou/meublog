import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.headercontent}>
    <aside className={styles.homeheader}>
        <h2>Hey, meu nome é <span>Walisson</span>.</h2>
        <strong>Eu sou um desenvolvedor frontend. Este é o meu site pessoal  - onde <br/> você encontrará todas as coisas em que estou pensando atualmente. </strong>
        <a href="http://localhost:3000/sobre">
        <button type="button" className={styles.buttonabout}> Mais sobre mim</button>
        </a>
    </aside>
   
    </div>
  )
}
