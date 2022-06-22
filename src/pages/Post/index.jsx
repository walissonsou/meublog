import styles from './Post.module.css'
import Posts from './Posts'

export default function Post ()  {
  return (
   <>
     <div className={styles.container}>
      <div className={styles.content}>
        <h1> Blog </h1>
        <p> Eu escrevo sobre desenvolvimento, React, NodeJs, curiosidades do mundo digital e mais. </p>
        
        <div className={styles.input}>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="search" placeholder="Procurar posts..."></input>
        </div>
      </div>
    </div>
    <Posts />
   </>
  )
}
