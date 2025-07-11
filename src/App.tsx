import AppShell from "./components/AppShell";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import './index.css';
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import UserPage from "./pages/UserPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />

        <Route
          path="/*"
          element={
            <AppShell>
              <Routes>
                <Route path="Dashboard" element={<DashboardPage />} />
                <Route path="TaskPage" element={<TaskPage />} />
                <Route path="AppPage" element={<AppPage />} />
                <Route path="UserPage" element={<UserPage />} />
                <Route path="Chats" element={<ChatPage />} />
              </Routes>
            </AppShell>
          }
        />
      </Routes>
    </>
  );
}
