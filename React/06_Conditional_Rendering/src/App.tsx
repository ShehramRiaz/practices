type UserStatusProps = {
  isLoggedIn: boolean;
  isAdmin: boolean;
};

type DashboardProps = Pick<UserStatusProps, "isAdmin">;

function Logout() {
  return (
    <>
      <p>Please log in.</p>
      <button>Login</button>
    </>
  );
}

function Dashboard({ isAdmin }: DashboardProps) {
  return (
    <>
      <p>Welcome back{isAdmin ? ", Admin!" : "!"}</p>
      <h1>Dashboard</h1>
      {isAdmin && <h2>Admin Panel</h2>}
      <button>Logout</button>
    </>
  );
}

function UserStatus({ isAdmin, isLoggedIn }: UserStatusProps) {
  if (isLoggedIn) {
    return <Dashboard isAdmin={isAdmin} />;
  }
  return <Logout />;
}

function App() {
  return <UserStatus isAdmin={true} isLoggedIn={true} />;
}

export default App;
