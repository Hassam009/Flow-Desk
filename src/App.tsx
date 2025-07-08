import AppShell from "./components/AppShell";
import DashboardPage from "./components/pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import './index.css';

export default function App() {
  return (
    <AppShell>
      <Routes>
     <Route path="/" element={<DashboardPage />} />
       <Route path="/tasks" element={null} />
        <Route path="/apps" element={null} />
      </Routes>
    </AppShell>
  );
}