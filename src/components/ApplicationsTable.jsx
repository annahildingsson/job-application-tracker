import './ApplicationsTable.css';

// Hjälpfunktion för att välja rätt CSS-klass baserat på status
function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case 'interview':
      return 'status-interview';
    case 'applied':
      return 'status-applied';
    case 'saved':
      return 'status-saved';
    case 'rejected':
      return 'status-rejected';
    default:
      return 'status-saved';
  }
}

// Vi tar emot "applications" som en prop i funktionen
function ApplicationsTable({ applications }) {
  return (
    <div className="table-container">
      <table className="app-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Vi loopar igenom listan med .map() */}
          {applications.map((app) => (
            <tr key={app.id}>
              <td className="company-name">{app.company}</td>
              <td>{app.position}</td>
              <td>
                <span className={`status-badge ${getStatusClass(app.status)}`}>
                  {app.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationsTable;