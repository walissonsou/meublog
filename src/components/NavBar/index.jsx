import logo from '../../assets/logo.png';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
return (
    <header className={styles.navbar}> 
      <Link to="/" className={styles.a} >
        <img src={logo} className={styles.logo} alt="logo" /> 
      </Link>    
     <ul className={styles.navlist}>   
        <li><Link className={styles.a} to="/">HOME </Link> </li>
        <li><Link className={styles.a} to="/sobre"> SOBRE </Link></li>
        <li><Link className={styles.a} to="/blog"> BLOG </Link> </li>
        <li><Link className={styles.a} to="/livros"> LIVROS </Link></li>
      </ul>
    </header>

    
  )
}
