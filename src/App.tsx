import AppShell from "./components/AppShell";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import UserPage from "./pages/UserPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";
import PrivateRoute from "./components/routes/ProtectedRoutes"; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <AppShell>
              <Routes>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="taskpage" element={<TaskPage />} />
                <Route path="apppage" element={<AppPage />} />
                <Route path="userpage" element={<UserPage />} />
                <Route path="chats" element={<ChatPage />} />
              </Routes>
            </AppShell>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
