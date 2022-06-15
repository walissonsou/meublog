import styles from './Header.module.css';
import SearchBar from '../Search/SearchBar'
const Header = () => {
  return (
    <header className={styles.homeheader}>
        <h2>Ei, seja bem-vindo ao</h2>
        <h1> 
        
          <span>"</span>Blog posts<span>"</span>  
        </h1>
        <p> Que tal aprendermos juntos? <br /> O aprendizado compartilhado sempre será multiplicado.</p>
        <SearchBar />
    </header>
  )
}
export default Header;
