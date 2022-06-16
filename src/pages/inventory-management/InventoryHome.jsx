import "./../../App.css";

// MUI imports
import Box from "@mui/material/Box";

// Component imports
import NavBar from './../../components/common/nav-bar';
import FabMenu from './../../pages/inventory-management/fab-menu/fab-menu';

function InventoryHome() {
  const getFabMenuPositionStyles = () => {
    return {
      position: "absolute",
      bottom: "20px",
      right: "20px",
    };
  };

  return (
    // <div className="App">
    <div>
      <NavBar />
      <Box sx={getFabMenuPositionStyles()}>
        <FabMenu></FabMenu>
      </Box>
    </div>
  );
}
export default InventoryHome;
