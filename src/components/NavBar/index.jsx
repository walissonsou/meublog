import logo from '../../assets/logo.png';
import styles from './NavBar.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {

const [isMobile, setIsMobile] = useState(false);
console.log(isMobile)

  const changeStyle = () => {
    setIsMobile(!isMobile)
  } 
return (
    <nav className={styles.navbar}>  <a href="/"> <img src={logo} className={styles.logo} alt="logo"/> </a>

    
     
     <button onClick={changeStyle} className={styles.button}>
     <div className={styles.mobilemenu}>  
     <div className='list1'></div>
     <div className='list1'></div>
     <div className='list1'></div>
     </div>
     
     </button>

     <ul className={isMobile ? styles.navlist : styles.navlistactive}>   
        <li><Link className={styles.a} to="/posts"> POSTS </Link> </li>
        <li><Link className={styles.a} to="/contato"> CONTATO </Link></li>
        <li><Link className={styles.a} to="/culture"> CULTURA </Link> </li>
        <li><Link className={styles.a} to="/about"> SOBRE </Link></li>
      </ul>
    </nav>

    
  )
}
