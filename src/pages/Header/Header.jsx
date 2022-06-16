import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headercontent}>
    <aside className={styles.homeheader}>
        <h2>Hey, meu nome é <span>Walisson</span>.</h2>
        <p>Eu sou um desenvolvedor frontend. Este é o meu site pessoal  - onde <br/> você encontrará todas as coisas em que estou pensando atualmente. </p>
        <button  className={styles.buttons}> <a href="http://localhost:3000/sobre"></a>Mais sobre mim</button>
    </aside>
   
    </div>
  )
}
export default Header;
