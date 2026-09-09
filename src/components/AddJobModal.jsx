import { useState } from "react";
import { createPortal } from "react-dom";
import "./AddJobModal.css";

function AddJobModal({ onClose, onAddJob }) {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("Applied");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!company || !position) return;
  
      const newJob = {
        id: Date.now(),
        company,
        position,
        status,
      };
  
      onAddJob(newJob);
      onClose();
    };
    
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Add New Job</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Company</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Spotify"
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
              placeholder="e.g. Developer"
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
    </div>,
    document.body
  );
}

export default AddJobModal;
