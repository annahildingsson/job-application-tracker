import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import ApplicationTable from "./components/ApplicationsTable";
import AddJobModal from "./components/AddJobModal";
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
];

function App() {
  const [applications, setApplications] = useState(() => {
    const savedJobs = localStorage.getItem("job_applications");
    return savedJobs ? JSON.parse(savedJobs) : initialApplications;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("job_applications", JSON.stringify(applications));
  }, [applications]);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddJob = (newJob) => {
    setApplications((prev) => [newJob, ...prev]);
  };

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
          {/* List of applications will be here */}
          <ApplicationTable applications={applications} />
        </section>
      </main>
      {isModalOpen && (
        <AddJobModal onClose={handleCloseModal} onAddJob={handleAddJob} />
      )}
    </div>
  );
}

export default App;
