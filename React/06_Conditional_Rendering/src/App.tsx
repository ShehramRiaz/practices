function Login() {
  return <p>Please Login!!</p>;
}

function Dashboard() {
  return <h2>Welcome</h2>;
}

function Status() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Dashboard />;
  } else {
    return <Login />;
  }
}

function Role() {
  const isAdmin = true;

  return <>{isAdmin ? <p>Admin</p> : <p>User</p>}</>;
}

function App() {
  const count = 0;

  return (
    <>
      <Status />
      <Role />

      {count > 0 && <p>Products Available</p>}
    </>
  );
}

export default App;
