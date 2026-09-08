import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import ApplicationTable from "./components/ApplicationsTable";
import AddJobModal from "./components/AddJobModal";
import { useState } from "react";
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
  const [applications, setApplications] = useState(initialApplications);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <StatsCard title="Saved" value="5" />
          <StatsCard title="Applied" value="24" />
          <StatsCard title="Interviews" value="6" />
          <StatsCard title="Offers" value="2" />
        </section>

        <section className="recent-applications">
          <h2 className="recent-applications-title">Recent Applications</h2>
          <p className="recent-applications-subtitle">
            Here's a list of your most recent job applications.
          </p>
          {/* List of applications will be here */}
          <ApplicationTable applications={initialApplications} />
        </section>
      </main>
      {isModalOpen && <AddJobModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
