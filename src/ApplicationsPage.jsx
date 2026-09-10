import FilterBar from "../components/FilterBar";
import ApplicationTable from "../components/ApplicationsTable";

function ApplicationsPage({ 
  applications, 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  onDeleteJob, 
  onUpdateJob, 
  onEditJob 
}) {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>All Job Applications</h1>
        <p>Manage, filter, and update all your job applications in one place.</p>
      </div>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <ApplicationTable
        applications={applications}
        onDeleteJob={onDeleteJob}
        onUpdateJob={onUpdateJob}
        onEditJob={onEditJob}
      />
    </div>
  );
}

export default ApplicationsPage;