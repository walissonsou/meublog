import logo from '../../assets/logo.png';
import styles from './NavBar.module.css';
import { useState } from 'react';


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
        <li><a href="/posts"> POSTS </a> </li>
        <li><a href="/contato"> CONTATO </a></li>
        <li><a href="/culture"> CULTURA </a> </li>
        <li><a href="/about"> SOBRE </a></li>
      </ul>
    </nav>

    
  )
}
