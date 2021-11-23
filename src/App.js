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
          <Route path="/service/:serviceId" element={<Order />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/book" element={< Book />} />
            <Route path="/dashboard/bookingList" element={< BookingList />} />
            <Route path="/dashboard/review" element={< Review />} />

            <Route path="/dashboard/orderList" element={< OrderLists />} />
            <Route path="/dashboard/makeAdmin" element={< MakeAdmin />} />
            <Route path="/dashboard/manageService" element={< ManageService />} />
            <Route path="/dashboard/addService" element={< AddService />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
