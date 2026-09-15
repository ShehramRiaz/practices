import { Route, Routes } from "react-router";
import DashboardLayout from "./pages/Dashboard/DashboardLayout/DashboardLayout";
import Profile from "./pages/Dashboard/Profile/Profile";
import Settings from "./pages/Dashboard/Settings/Settings";
import Orders from "./pages/Dashboard/Orders/Orders";
import OrderDetails from "./pages/Dashboard/OrderDetails/OrderDetails";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />

        <Route path="profile" element={<Profile />} />

        <Route path="settings" element={<Settings />} />

        <Route path="orders">
          <Route index element={<Orders />} />
          <Route path=":orderId" element={<OrderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
