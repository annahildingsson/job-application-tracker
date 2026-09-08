import './AddJobModal.css';

function AddJobModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Add New Application</h2>

        <form>
          <div className="form-group">
            <label className="form-label">Company</label>
            <input type="text" className="form-input" placeholder="e.g. Spotify" />
          </div>

          <div className="form-group">
            <label className="form-label">Position</label>
            <input type="text" className="form-input" placeholder="e.g. Frontend Developer" />
          </div>

          <div className="form-group">
            <label className="form-label">Status</label>
            <select className="form-select">
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Saved">Saved</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddJobModal;