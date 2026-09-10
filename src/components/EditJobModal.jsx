import { useState } from "react";
import { createPortal } from "react-dom";
import "./AddJobModal.css";

function EditJobModal({ job, onClose, onUpdateJob }) {
  const [company, setCompany] = useState(job.company);
  const [position, setPosition] = useState(job.position);
  const [status, setStatus] = useState(job.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !position) return;

    onUpdateJob({
      ...job,
      company,
      position,
      status,
    });
    onClose();
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Edit Application</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Company</label>
            <input
              type="text"
              className="form-input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Position</label>
            <input
              type="text"
              className="form-input"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Saved">Saved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Delete Application</label>
            <button
              type="button"
              className="btn-danger"
              onClick={() => {
                onUpdateJob({ ...job, status: "Deleted" });
                onClose();
              }}
            >
              Delete
            </button>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default EditJobModal;
