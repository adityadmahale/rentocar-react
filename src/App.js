import "./App.css";

// MUI imports

// Prime React imports
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// React imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Flip } from "react-toastify";

// Component imports
import Success from "./pages/user-management/Success";
import Registration from "./pages/user-management/Registration";
import Login from "./pages/user-management/Login";
import UserList from "./pages/user-management/UserList";
import UserProfile from "./pages/user-management/UserProfile";
import TicketsHome from "./pages/customer-support/TicketsHome";
import InventoryHome from "./pages/inventory-management/InventoryHome";
import Offers from "./pages/offers-management/offers";
import VehicleDetails from "./pages/reviews-management/vehicleDetails";
import FabMenu from './pages/inventory-management/fab-menu/fab-menu';
import { Box } from '@mui/material';

function App() {
  const [id, setId] = useState([]);
  const getFabMenuPositionStyles = () => {
    return {
      position: 'absolute',
      bottom: '20px',
      right: '20px'
    };
  };


  return (
    <div className="App">
      <ToastContainer icon={false} transition={Flip} />
      <Router>
        <Routes>
          {/* Routes for User Management and Support Features */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/userlist" element={<UserList setId={setId} />} />
          <Route path="/success" element={<Success />} />
          <Route path="/userprofile" element={<UserProfile id={id} />} />
          <Route path="/ticketshome" element={<TicketsHome />} />
          {/* Routes for Inventory Management */}
          <Route path="/inventoryhome" element={<InventoryHome />} />
          {/* Route for Offers Management */}
          <Route path="/offers" element={<Offers />} />
          {/* Route for User Reviews Management */}
          <Route path="/vehicles/details" element={<VehicleDetails />} />
        </Routes>
      </Router >
      {(window.location.pathname !== '/registration' && window.location.pathname !== '/') && 
        <Box sx={getFabMenuPositionStyles()}>
        <FabMenu></FabMenu>
      </Box>}
    </div>
  );
}

export default App;
