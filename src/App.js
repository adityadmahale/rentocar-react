import './App.css';

// MUI imports

// Prime React imports
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// React imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';

// Component imports
import Success from './components/user-management/Success';
import Registration from "./components/user-management/Registration";
import Login from "./components/user-management/Login";
import UserList from './components/user-management/UserList';
import UserProfile from './components/user-management/UserProfile';
import TicketsHome from './components/customer-support/TicketsHome';
import InventoryHome from './components/inventory-management/InventoryHome';

function App() {
  const [id, setId] = useState([]);
  // const getFabMenuPositionStyles = () => {
  //   return {
  //     position: 'absolute',
  //     bottom: '20px',
  //     right: '20px'
  //   };
  // };

  return (
    <div className="App">
      < Router >
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
        </Routes>
      </Router >
    </div>
  );
}

export default App;
