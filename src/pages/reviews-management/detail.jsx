import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LuggageIcon from "@mui/icons-material/Luggage";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const StyledButton = styled(Button)({
  marginTop: "40px",
  padding: "15px",
  backgroundColor: "#00d2d3",
  color: "#fff",
  width: "80%",
  borderColor: "#00d2d3",
  "&:active": {
    backgroundColor: "#00d2d3",
  },
  "&:hover": {
    backgroundColor: "#00d2d3",
  },
});

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    if (!location.state) {
      navigate("/availablecars");
    }
    setVehicle(location.state);
    const getData = async () => {};
    getData();
  }, [location, navigate]);

  return (
    <Container
      sx={{
        marginTop: "30px",
        paddingTop: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        paddingBottom: "20px",
        border: "1px solid #00d2d3",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
            }}
            alt={vehicle.name}
            src={vehicle.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>{vehicle.name}</h2>
          <p>{vehicle.type}</p>
          <b>CA ${vehicle.price} Total</b>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="h2"
            align="center"
            marginTop="25px"
          >
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              wrap="nowrap"
            >
              <Grid item xs={12} md={2} container></Grid>

              <Stack
                xs={12}
                md={3}
                direction="row"
                alignItems="center"
                gap={1}
                marginLeft={{ md: "20px" }}
              >
                <PersonIcon fontSize="small" style={{ color: "#00d2d3" }} />
                {vehicle.seats}
                {vehicle.seats === 1 ? " Seat" : " Seats"}
              </Stack>

              <Stack
                xs={12}
                md={3}
                direction="row"
                alignItems="center"
                gap={1}
                marginLeft={{ md: "20px" }}
              >
                <LuggageIcon fontSize="small" style={{ color: "#00d2d3" }} />
                {vehicle.largeBag}
                {vehicle.largeBag === 1 ? " Large Bag" : " Large Bags"}
              </Stack>

              <Stack
                xs={12}
                md={3}
                direction="row"
                alignItems="center"
                gap={1}
                marginLeft={{ md: "20px" }}
              >
                <LuggageIcon fontSize="small" style={{ color: "#00d2d3" }} />
                {vehicle.smallBag}
                {vehicle.smallBag === 1 ? " Small Bag" : " Small Bags"}
              </Stack>

              <Grid item xs={12} md={2} container></Grid>
            </Grid>
            <Typography
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "15px",
              }}
            >
              {/* Reference: https://mui.com/material-ui/material-icons */}
              {renderIcon(vehicle.door)}
              <Typography variant="body1" gutterBottom>
                4 Door
              </Typography>
              {renderIcon(vehicle.childCarSeat)}
              <Typography variant="body1" gutterBottom>
                Child Car Seat
              </Typography>
              {renderIcon(vehicle.automatic)}
              <Typography variant="body1" gutterBottom>
                Automatic
              </Typography>
            </Typography>
            <Typography
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {renderIcon(vehicle.ac)}
              <Typography variant="body1" gutterBottom>
                A/C
              </Typography>
              {renderIcon(vehicle.sportsMode)}
              <Typography variant="body1" gutterBottom>
                Sports Mode
              </Typography>
              {renderIcon(vehicle.cruiseControl)}
              <Typography variant="body1" gutterBottom>
                Cruise Control
              </Typography>
            </Typography>
          </Typography>
          <StyledButton
            variant="outlined"
            onClick={() => navigate("/checkout")}
          >
            BOOK NOW
          </StyledButton>
        </Grid>
      </Grid>
    </Container>
  );
};

const renderIcon = (status) => {
  if (status)
    return (
      <CheckIcon
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        color="success"
      />
    );
  else
    return (
      <CloseIcon
        sx={{ display: { xs: "none", md: "flex", color: "red" }, mr: 1 }}
      />
    );
};

export default Detail;
