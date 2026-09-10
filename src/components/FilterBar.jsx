import './FilterBar.css';

function FilterBar({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) {
  return (
    <div className="filter-bar">
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search by company or position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="status-filter-wrapper">
        <select
          className="status-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Saved">Saved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;