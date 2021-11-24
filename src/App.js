import {
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Book from "./Pages/Dashboard/Book/Book";
import Review from "./Pages/Dashboard/Review/Review";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./Pages/Dashboard/Admin/ManageService/ManageService";
import AddService from "./Pages/Dashboard/Admin/AddService/AddService";
import Explore from "./Pages/Explore/Explore";
import Order from "./Pages/Orders/Order/Order";
import AuthProvider from "./Context/AuthProvider";
import BookingList from "./Pages/Dashboard/BookingList/BookingList";
import OrderLists from "./Pages/Dashboard/Admin/OrderList/OrderLists";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./PrivateRoute/AdminRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/service/:serviceId" element={<PrivateRoute><Order /></PrivateRoute>} />

          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
            <Route path="/dashboard" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
            <Route path="/dashboard/book" element={<PrivateRoute>< Book /></PrivateRoute>} />
            <Route path="/dashboard/bookingList" element={<PrivateRoute>< BookingList /></PrivateRoute>} />
            <Route path="/dashboard/review" element={<PrivateRoute>< Review /></PrivateRoute>} />

            <Route path="/dashboard/orderList" element={<AdminRoute>< OrderLists /></AdminRoute>} />
            <Route path="/dashboard/makeAdmin" element={<AdminRoute>< MakeAdmin /></AdminRoute>} />
            <Route path="/dashboard/manageService" element={<AdminRoute>< ManageService /></AdminRoute>} />
            <Route path="/dashboard/addService" element={<AdminRoute>< AddService /></AdminRoute>} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
