import "./ApplicationsTable.css";

function ApplicationTable({ applications, onUpdateJob, onEditJob }) {
  if (applications.length === 0) {
    return (
      <div className="empty-state">
        <p>No job applications found.</p>
      </div>
    );
  }

  return (
    <table className="app-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((job) => (
          <tr
            key={job.id}
            className="clickable-row"
            onClick={() => onEditJob(job)}
          >
            <td className="font-medium">{job.company}</td>
            <td>{job.position}</td>
            <td onClick={(e) => e.stopPropagation()}>
              <select
                className={`status-badge status-${job.status.toLowerCase()}`}
                value={job.status}
                onChange={(e) =>
                  onUpdateJob({ ...job, status: e.target.value })
                }
              >
                <option value="Saved">Saved</option>
                <option value="Applied">Applied</option>
                <option value="Test">Test</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ApplicationTable;
