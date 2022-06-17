import "./../../App.css";

// MUI imports
import Box from "@mui/material/Box";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Component imports

import NavBar from "./../../components/common/nav-bar";
import FabMenu from "./fab-menu/fab-menu";


function InventoryHome() {
  const getFabMenuPositionStyles = () => {
    return {
      position: "fixed",
      bottom: "20px",
      right: "20px",
    };
  };

  return (
    // <div className="App">
    <div>
      <NavBar />
      <Box sx={{ display: "flex", flexFlow: 'row wrap', justifyContent: "center", alignItems: 'center', margin: '10px' }}>
        {Array(10).fill(0).map((_, i) => (
          <CarCard key={i} />
        ))}
        {/* <CarCard></CarCard> */}
      </Box>
      <Box sx={getFabMenuPositionStyles()}>
        <FabMenu></FabMenu>
      </Box>
    </div>
  );
}

const CarCard = () => {
  return (
    <Card sx={{ maxWidth: 345, width: 345, margin: '10px' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/einstiegsseite/Marken_Einstieg_BMW_M.jpg.grp-transform/xxlarge/Marken_Einstieg_BMW_M.jpg"
        alt="bmv"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BMW
        </Typography>
        <Box sx={{ display: "flex", flexFlow: 'column', justifyContent: "center", alignItems: 'center' }}>
          <Typography variant="body2" color="textSecondary" component="p"
            sx={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between', width: '100%' }}>
            <span>
              Registration No. :
            </span>
            <span>ABC123</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"
            sx={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between', width: '100%' }}>
            <span>
              Model No. : 
            </span>
            <span>
              ABC123
            </span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"
            sx={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between', width: '100%' }}>
            <span>
              Color : 
            </span>
            <span>
              Green
            </span> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"
            sx={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between', width: '100%' }}>
            <span>
              Status : 
            </span>
            <span>
              Available
            </span> 
          </Typography>
          
        </Box>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ color: '#00d2d3' }} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
export default InventoryHome;
