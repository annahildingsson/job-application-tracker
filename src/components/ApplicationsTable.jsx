import './ApplicationsTable.css';

function ApplicationTable() {
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
          <tr>
            <td className="company-name">IKEA</td>
            <td>Frontend Developer</td>
            <td>
              <span className="status-badge status-interview">Interview</span>
            </td>
          </tr>
          <tr>
            <td className="company-name">SAS</td>
            <td>Web Developer</td>
            <td>
              <span className="status-badge status-applied">Applied</span>
            </td>
          </tr>
          <tr>
            <td className="company-name">Volvo</td>
            <td>Software Developer</td>
            <td>
              <span className="status-badge status-saved">Saved</span>
            </td>
          </tr>
          <tr>
            <td className="company-name">Spotify</td>
            <td>UX Developer</td>
            <td>
              <span className="status-badge status-rejected">Rejected</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationTable;