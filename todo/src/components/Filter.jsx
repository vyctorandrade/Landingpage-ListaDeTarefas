

const Filter = () => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <p>Status:</p>
            <select>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </select>
        </div>
        <p>Ordem alavética:</p>
        <button>Asc</button>
        <button>Desc</button>
    </div>
  )
}

export default Filter