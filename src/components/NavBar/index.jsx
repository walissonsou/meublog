import avatar from '../../assets/avatar.png';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
return (
    <header className={styles.navbar}> 
    <div className={styles.container}>
      <Link to="/" className={styles.linkdafoto} >
       <span className={styles.span}>
        <img src={avatar} className={styles.avatar} alt="logo" /> 
       </span>
      </Link>    
     <nav className={styles.navlist}>   
       <ol>
          <li><Link className={styles.a} to="/">Início </Link> </li>
          <li><Link className={styles.a} to="/sobre"> Sobre </Link></li>
          <li><Link className={styles.a} to="/blog"> Blog </Link> </li>
          <li><Link className={styles.a} to="/livros"> Livros </Link></li>
        </ol>
      </nav>
      </div>
    </header>

    
  )
}
