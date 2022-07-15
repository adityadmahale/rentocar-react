import "./App.css";

// MUI imports

// Prime React imports
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// React imports
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Flip } from "react-toastify";

// Component imports

import Registration from "./pages/user-management/Registration";
import Login from "./pages/user-management/Login";
import UserProfile from "./pages/user-management/user-profile";
import TicketsHome from "./pages/customer-support/TicketsHome";
import Checkout from "./pages/payment-management/Checkout";
import InventoryHome from "./pages/inventory-management/InventoryHome";
import Offers from "./pages/offers-management/offers";
import VehicleDetails from "./pages/reviews-management/vehicleDetails";
import Comparision from "./pages/car-comparision/comparision";
import ReservationsSummary from "./pages/reservations-summary/reservationsSummary";
import AvailableCars from "./pages/reservation-management/availableCars";
import MakeReservation from "./pages/reservation-management/makeReservation";
import ViewReservations from "./pages/reservation-management/viewReservations";
import CancelReservation from "./pages/reservation-management/cancelReservation";
import ModifyReservation from "./pages/reservation-management/modifyReservation";
import auth from "./services/authService";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);

  return (
    <div className="App">
      <ToastContainer icon={false} transition={Flip} />
      <Router>
        <Routes>
          {/* Routes for User Management and Support Features */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Login />} />
          {/* Landing Page */}
          <Route path="/userprofile" element={!user ? <Navigate to="/" /> : <UserProfile user={user} />} />
          <Route path="/ticketshome" element={<TicketsHome />} />
          {/* Routes for Inventory Management */}
          <Route path="/inventoryhome" element={<InventoryHome />} />
          {/* Route for Offers Management */}
          <Route
            path="/offers"
            element={!user ? <Navigate to="/" /> : <Offers user={user} />}
          />
          {/* Route for User Reviews Management */}
          <Route
            path="/vehicles/:id"
            element={<VehicleDetails user={user} />}
          />
          {/* Route for Payment Management */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/comparison" element={<Comparision />} />
          <Route
            path="/reservationsSummary"
            element={<ReservationsSummary />}
          />
          {/* Route for Reservation Management */}
          <Route path="/makereservation" element={<MakeReservation />} />
          <Route path="/availablecars" element={<AvailableCars />} />
          <Route path="/viewreservations" element={<ViewReservations />} />
          <Route path="/cancelreservation" element={<CancelReservation />} />
          <Route path="/modifyreservation" element={<ModifyReservation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
