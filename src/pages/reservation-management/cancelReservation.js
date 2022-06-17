import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TextField } from "@mui/material";
import { CardActions, Button } from "@mui/material";
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

const CancelReservation = () => {
  const navigate = useNavigate();
  const [reason, setReason] = React.useState();

  const handleChange = (event) => {
    setReason(event.target.value);
  };

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
        {/* Reference: https://mui.com/material-ui/react-grid/ */}
        {/* Reference: https://mui.com/material-ui/react-typography */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h4" gutterBottom>
              Cancel Reservation
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
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
          <Grid item xs={12} sm={3} md={3}>
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
          <Grid item xs={12} sm={3} md={3} margin="auto">
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
          <Grid item xs={12} sm={3} md={3} margin="auto">
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
          <Grid item xs={12} sm={12} md={12}>
            {/* Reference: https://mui.com/material-ui/react-text-field/ */}
            <TextField
              required
              id="reason"
              name="reason"
              label="Cancellation Reason"
              type="text"
              value={reason}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} margin="auto">
            {/* Reference: https://mui.com/material-ui/react-button */}
            <StyledButton
              variant="contained"
              size="large"
              color="warning"
              onClick={() => {
                navigate("/viewreservations");
              }}
            >
              Cancel
            </StyledButton>
            <StyledButton
              variant="contained"
              size="large"
              color="success"
              onClick={() => {
                navigate("/viewreservations");
              }}
            >
              Submit
            </StyledButton>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default CancelReservation;
