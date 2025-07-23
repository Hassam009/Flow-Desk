import AppShell from "./components/AppShell";
import DashboardPage from "./pages/DashboardPage";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import UserPage from "./pages/UserPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import PrivateRoute from "./routes/ProtectedRoutes";
import PublicRoute from "./routes/PublicRoutes";

export default function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />

<Route
        path="/*"
        element={
          <PrivateRoute>
            <AppShell />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="taskpage" element={<TaskPage />} />
        <Route path="apppage" element={<AppPage />} />
        <Route path="userpage" element={<UserPage />} />
        <Route path="chats" element={<ChatPage />} />
      </Route>
    </Routes>
  );
}
