import AppShell from "./components/AppShell";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import './index.css';
import TaskPage from "./pages/TaskPage";

export default function App() {
  return (
    <AppShell>
      <Routes>
     <Route path="/" element={<DashboardPage />} />
       <Route path="/TaskPage" element={<TaskPage />} />
        <Route path="/apps" element={null} />
      </Routes>
    </AppShell>
  );
}