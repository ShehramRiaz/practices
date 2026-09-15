import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext/AuthContext";

function Login() {
  const { login, user, authLoading } = useAuth();
  const navigate = useNavigate();

  if (authLoading) {
    return <p>Checking authentication...</p>;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  function handleLogin() {
    login();
    navigate("/dashboard");
  }

  return (
    <>
      <h1>Login</h1>

      <button onClick={handleLogin}>Login Now</button>
    </>
  );
}

export default Login;
