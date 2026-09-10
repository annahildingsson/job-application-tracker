import "./ApplicationsTable.css";

function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case "interview":
      return "status-interview";
    case "applied":
      return "status-applied";
    case "saved":
      return "status-saved";
    case "rejected":
      return "status-rejected";
    default:
      return "status-saved";
  }
}

function ApplicationsTable({ applications, onDeleteJob, onUpdateJob }) {
  if (applications.length === 0) {
    return (
      <div className="empty-state">
        <p>No job applications found.</p>
      </div>
    );
  }
  return (
    <div className="table-container">
      <table className="app-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td className="company-name">{app.company}</td>
              <td>{app.position}</td>
              <td>
                <span className={`status-badge ${getStatusClass(app.status)}`}>
                  {app.status}
                </span>
              </td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => onDeleteJob(job.id)}
                  title="Delete application"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationsTable;
