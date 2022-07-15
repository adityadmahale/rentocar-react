/*
* @author: Maan Mandaliya (B00903171 | mn638205@dal.ca)
* @description: This file fetches available cars according to customer requirements taken from /makereservation
*               and shows details on Frontend to resever the car
*/

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import NavBar from "../../components/common/nav-bar";
import { styled } from "@mui/material";
import { getVehicles } from "../../services/vehicleService";

const StyledButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#00d2d3",
  padding: "15px",
  "&:active": {
    backgroundColor: "#00d2d3",
  },
  "&:hover": {
    backgroundColor: "#00d2d3",
  },
});

const renderIcon = (status, text) => {
  if (status)
    return (
      <>
        {/* Reference: https://mui.com/material-ui/material-icons */}
        <CheckIcon sx={{ display: { md: "flex" }, mr: 1 }} color="success" />
        <Typography variant="div" gutterBottom>
          {text}
        </Typography>
      </>
    );
  else
    return (
      <>
        <CloseIcon sx={{ display: { md: "flex", color: "red" }, mr: 1 }} />
        <Typography variant="div" gutterBottom>
          {text}
        </Typography>
      </>
    );
};

const AvailableCars = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const { data: newVehicles } = await getVehicles();
      setVehicles(newVehicles);
    };

    getData();
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      {/* Reference: https://mui.com/material-ui/react-box */}
      <Box
        sx={{ flexGrow: 1 }}
        mt={10}
        bgcolor="white"
        style={{ padding: "15px" }}
      >
        <Box>
          {/* Reference: https://mui.com/material-ui/react-grid/ */}
          <Grid container spacing={3} margin="auto">
            <Grid item xs={12} sm={4} md={4}>
              {/* Reference: https://mui.com/material-ui/react-typography */}
              <Typography variant="body1" gutterBottom>
                Pickup
              </Typography>
              <Typography variant="body1" gutterBottom>
                Halifax - Bayers Rd, B3L4P3
              </Typography>
              <Typography variant="body1" gutterBottom>
                Monday, June 06 12:00 PM
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} margin="auto">
              <Typography variant="body1" gutterBottom>
                Drop
              </Typography>
              <Typography variant="body1" gutterBottom>
                Halifax - Bayers Rd, B3L4P3
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tuesday, June 07 12:00 PM
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} margin="auto" textAlign={"center"}>
              {/* Reference: https://mui.com/material-ui/react-button */}
              <StyledButton
                variant="contained"
                size="large"
                color="warning"
                onClick={() => {
                  navigate("/makereservation");
                }}
              >
                Modify Rental Details
              </StyledButton>
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* Reference: https://mui.com/material-ui/react-divider */}
              <Divider
                orientation="horizontal"
                variant="inset"
                flexItem
                style={{ marginLeft: "-1px" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3} margin="auto">
            <Grid item xs={12} sm={4} md={4} margin="auto">
              {/* Reference: https://mui.com/material-ui/api/form-control */}
              {/* Reference: https://mui.com/material-ui/react-select/ */}
              <FormControl fullWidth>
                <InputLabel id="filter">Filter By</InputLabel>
                <Select
                  labelId="filter-label"
                  id="filter"
                  label="filter"
                  value={"All"}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"SUV"}>SUV</MenuItem>
                  <MenuItem value={"Sedan"}>Sedan</MenuItem>
                  <MenuItem value={"Hatchback"}>Hatchback</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={4} margin="auto">
              <FormControl fullWidth>
                <InputLabel id="sort">Sort By</InputLabel>
                <Select
                  labelId="sort-label"
                  id="sort"
                  label="sort"
                  value={"Price-L2H"}
                >
                  <MenuItem value={"Price-L2H"}>Price (Low to High)</MenuItem>
                  <MenuItem value={"Price-H2L"}>Price (High to Low)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={4} textAlign="center" margin={"auto"}>
              <StyledButton variant="contained" size="large" color="success">
                Submit
              </StyledButton>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider
                orientation="horizontal"
                variant="inset"
                flexItem
                style={{ marginLeft: "-1px" }}
              />
            </Grid>
          </Grid>
        </Box>
        {vehicles.map((vehicle) => (
          <Box key={vehicle._id}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <img
                  alt="suv"
                  src={vehicle.image}
                  style={{
                    height: "150px",
                    width: "250px",
                    alignSelf: "center",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} margin="auto">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    textAlign={"center"}
                    sx={{ fontFamily: "monospace" }}
                  >
                    {vehicle.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    textAlign={"center"}
                    sx={{ fontFamily: "monospace" }}
                  >
                    {vehicle.type}
                  </Typography>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {renderIcon(vehicle.door, "4 Door")}
                  {renderIcon(vehicle.seats, vehicle.seats + "Seats")}
                  {renderIcon(vehicle.automatic, "Automatic")}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {renderIcon(vehicle.ac, "A/C")}
                  {renderIcon(vehicle.sportsMode, "Sports Mode")}
                  {renderIcon(vehicle.cruiseControl, "Cruise Control")}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {renderIcon(vehicle.largeBag > 0, vehicle.largeBag + "Large Bags")}
                  {renderIcon(vehicle.smallBag > 0, vehicle.smallBag + "Small Bags")}
                  {renderIcon(vehicle.childCarSeat, "Child Car Seat")}
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                textAlign="center"
                margin={"auto"}
              >
                <h2>C$ {vehicle.price} Total</h2>
                <StyledButton
                  variant="contained"
                  size="large"
                  color="success"
                  onClick={() => {
                    navigate(`/vehicles/${vehicle._id}`, {
                      state: vehicle,
                    });
                  }}
                >
                  Reserve
                </StyledButton>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Divider
                  orientation="horizontal"
                  variant="inset"
                  flexItem
                  style={{ marginLeft: "-1px" }}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default AvailableCars;
