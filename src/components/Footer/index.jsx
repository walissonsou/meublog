
import { Link } from 'react-router-dom'
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
    <hr />
      <div className={styles.FooterWrap}>
        <div className={styles.FooterLinksContainer}>
          <div className={styles.FooterLinksWrapper}>
            <div className={styles.FooterLinkItems}>
              
             
                <Link  className={styles.FooterLinkItems} to="#"> Home </Link>
                <Link  className={styles.FooterLinkItems} to="#"> Sobre </Link>
                <Link  className={styles.FooterLinkItems} to="#"> Blog </Link>
                <Link  className={styles.FooterLinkItems} to="#"> Livro </Link>
             </div>
             <div  className={styles.FooterLinkItems}>
            
                <Link   className={styles.FooterLinkItems} to="#"> Facebook </Link>
                <Link  className={styles.FooterLinkItems} to="#"> Twitter  </Link>
                <Link  className={styles.FooterLinkItems} to="#"> GitHub </Link>
                <Link  className={styles.FooterLinkItems} to="#"> Linkedin </Link>
                
             </div>
            
          </div>
        </div>
      </div>
      <p className={styles.copyrightp}> © Walisson Souza 2022 </p>
    </footer>
  )
}
export default Footer;
