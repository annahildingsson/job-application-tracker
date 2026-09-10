import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import ApplicationTable from "./components/ApplicationsTable";
import AddJobModal from "./components/AddJobModal";
import FilterBar from "./components/FilterBar";
import EditJobModal from "./components/EditJobModal";
import { useState, useEffect } from "react";
import "./App.css";


const initialApplications = [
  {
    id: 1,
    company: "IKEA",
    position: "Frontend Developer",
    status: "Interview",
  },
  { id: 2, company: "SAS", position: "Web Developer", status: "Applied" },
  { id: 3, company: "Spotify", position: "Backend Developer", status: "Saved" },
  {
    id: 4,
    company: "Google",
    position: "Fullstack Developer",
    status: "Offer",
  },
  {
    id: 5,
    company: "Amazon",
    position: "Software Engineer",
    status: "Rejected",
  },
];

function App() {
  const [applications, setApplications] = useState(() => {
    const savedJobs = localStorage.getItem("job_applications");
    return savedJobs ? JSON.parse(savedJobs) : initialApplications;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("job_applications", JSON.stringify(applications));
  }, [applications]);

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalSaved = applications.filter(
    (app) => app.status === "Saved"
  ).length;
  const totalApplications = applications.length;
  const totalInterviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;
  const totalOffers = applications.filter(
    (app) => app.status === "Offer"
  ).length;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddJob = (newJob) => {
    setApplications((prev) => [newJob, ...prev]);
  };

  const handleDeleteJob = (jobId) => {
    setApplications((prev) => prev.filter((job) => job.id !== jobId));
  };

  const handleUpdateJob = (updatedJob) => {
    setApplications((prev) =>
      prev.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  const [editingJob, setEditingJob] = useState(null);

  return (
    <div className="app-bg">
      <Header onAddJob={handleOpenModal} />
      <main className="main-container">
        <section className="welcome-section">
          <h1 className="welcome-title">Good afternoon 👋</h1>
          <p className="welcome-subtitle">
            Here's an overview of your job search.
          </p>
        </section>

        <section className="stats-grid">
          <StatsCard title="Saved" value={totalSaved} />
          <StatsCard title="Applications" value={totalApplications} />
          <StatsCard title="Interviews" value={totalInterviews} />
          <StatsCard title="Offers" value={totalOffers} />
        </section>

        <section className="recent-applications">
          <h2 className="recent-applications-title">Recent Applications</h2>
          <p className="recent-applications-subtitle">
            Here's a list of your most recent job applications.
          </p>

          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          <ApplicationTable
            applications={filteredApplications}
            onDeleteJob={handleDeleteJob}
            onUpdateJob={handleUpdateJob}
            onEditJob={(job) => setEditingJob(job)}
          />
        </section>
      </main>

      {isModalOpen && (
        <AddJobModal onClose={handleCloseModal} onAddJob={handleAddJob} />
      )}
      {editingJob && (
        <EditJobModal
          job={editingJob}
          onClose={() => setEditingJob(null)}
          onUpdateJob={handleUpdateJob}
        />
      )}
    </div>
  );
}

export default App;
