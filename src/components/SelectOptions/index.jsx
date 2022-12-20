import styles from "./SelectOption.module.css";

export const SelectOptions = ({ itensPage, setItensPage }) => {
  return (
    <div>
      <span>Itens por página </span>
      <select
        className={styles.containerSelect}
        value={itensPage}
        onChange={(e) => setItensPage(Number(e.target.value))}
      >
        <option value={10}> 10 </option>
        <option value={15}> 15 </option>
        <option value={20}> 20 </option>
      </select>
      
    </div>
  );
};
