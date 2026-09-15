import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <h1>Dashboard</h1>

      <p>Welcome, {user?.name}</p>
      <p>{user?.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
