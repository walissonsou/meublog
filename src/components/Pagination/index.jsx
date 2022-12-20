import styles from "./Pagination.module.css";
export default function Pagination({pages, setCurrentPage, currentPage}) {
  return (
    <div className={styles.containerButton}> 
      {Array.from(Array(pages), (item,index  ) => {
        return  <button
          style={index === currentPage ? {border: "1px solid var(--blue-400)" , background:"gray"}: null}
         className={styles.button} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} > {index + 1} </button> })}  
      </div>
  )
}
