export const SelectOptions = ({itensPage, setItensPage}) => {
  return (
    <div>
      <select value={itensPage} onChange={(e) => setItensPage(Number(e.target.value))}>
        <option value={5} > 5  </option>
        <option value={10} > 10 </option>
        <option value={15} > 15 </option>
        <option value={20} > 20 </option>
      </select>
    </div>
  )
}
