import React from 'react'

export default function Search({setSearch,search}) {
  return (
    <div>  <input
    name="search"
    type="text"
    placeholder="Buscar post..."
    onChange={(e) => setSearch(e.target.value).uppercase()}
    value={search}
  ></input></div>
  )
}
