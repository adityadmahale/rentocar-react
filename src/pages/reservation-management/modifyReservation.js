import React from "react";
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

const ModifyReservation = () => {
  const navigate = useNavigate();
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
            <Grid item xs={12} sm={4} md={4} margin="auto">
              <Typography variant="body1" gutterBottom>
                Age: 18
              </Typography>
              <Typography variant="body1" gutterBottom>
                Nationality: Non-Canadian
              </Typography>
              <Typography variant="body1" gutterBottom>
                Car Type: SUV
              </Typography>
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
        <Box>
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
                src={require("../../assets/images/suv.webp")}
                style={{ height: "150px", width: "250px", alignSelf: "center" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} margin="auto">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  sx={{ fontFamily: "monospace" }}
                >
                  Hyundai Tucson
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  sx={{ fontFamily: "monospace" }}
                >
                  SUV
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* Reference: https://mui.com/material-ui/material-icons */}
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  4 Door
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  7 Seats
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Automatic
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  A/C
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Sports Mode
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Cruise Control
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  1 Large
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  2 Small Bags
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Child Car Seat
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} textAlign="center" margin={"auto"}>
              <h2>C$ 200 Total</h2>
              <StyledButton
                variant="contained"
                size="large"
                color="warning"
                onClick={() => {
                  navigate("/vehicles/details");
                }}
              >
                Change
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
        <Box>
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
                src={require("../../assets/images/sedan.webp")}
                style={{ height: "150px", width: "250px", alignSelf: "center" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} margin="auto">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  sx={{ fontFamily: "monospace" }}
                >
                  Hyundai Verna
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  sx={{ fontFamily: "monospace" }}
                >
                  Sedan
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  4 Door
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  4 Seats
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Automatic
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  A/C
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Sports Mode
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Cruise Control
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  1 Large
                </Typography>
                <CloseIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="error"
                />
                <Typography variant="body1" gutterBottom>
                  2 Small Bags
                </Typography>
                <CloseIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="error"
                />
                <Typography variant="body1" gutterBottom>
                  Child Car Seat
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} textAlign="center" margin={"auto"}>
              <h2>C$ 150 Total</h2>
              <StyledButton
                variant="contained"
                size="large"
                color="warning"
                onClick={() => {
                  navigate("/vehicles/details");
                }}
              >
                Change
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
        <Box>
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
                src={require("../../assets/images/hatchback.webp")}
                style={{ height: "150px", width: "250px", alignSelf: "center" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} margin="auto">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  sx={{ fontFamily: "monospace" }}
                >
                  Honda Breez
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  sx={{ fontFamily: "monospace" }}
                >
                  Hatchback
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  4 Door
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  4 Seats
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Automatic
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  A/C
                </Typography>
                <CheckIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="success"
                />
                <Typography variant="body1" gutterBottom>
                  Sports Mode
                </Typography>
                <CloseIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="error"
                />
                <Typography variant="body1" gutterBottom>
                  Cruise Control
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CloseIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="error"
                />
                <Typography variant="body1" gutterBottom>
                  1 Large
                </Typography>
                <CloseIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="error"
                />
                <Typography variant="body1" gutterBottom>
                  2 Small Bags
                </Typography>
                <CloseIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  color="error"
                />
                <Typography variant="body1" gutterBottom>
                  Child Car Seat
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} textAlign="center" margin={"auto"}>
              <h2>C$ 110 Total</h2>
              <StyledButton
                variant="contained"
                size="large"
                color="warning"
                onClick={() => {
                  navigate("/vehicles/details");
                }}
              >
                Change
              </StyledButton>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              {/* Reference: https://mui.com/material-ui/react-button */}
              <StyledButton
                variant="contained"
                size="large"
                color="warning"
                onClick={() => {
                  navigate("/viewreservations");
                }}
              >
                Cancel Modify
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ModifyReservation;
