import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LuggageIcon from "@mui/icons-material/Luggage";
import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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
            alt="The house from the offer."
            src="/tucson.png"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>Intermediate SUV</h2>
          <p>Hyundai Tucson or similar</p>
          <b>CA 267.36 Total</b>
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
                <PersonIcon fontSize="small" style={{ color: "#00d2d3" }} />5
                Seats
              </Stack>

              <Stack
                xs={12}
                md={3}
                direction="row"
                alignItems="center"
                gap={1}
                marginLeft={{ md: "20px" }}
              >
                <LuggageIcon fontSize="small" style={{ color: "#00d2d3" }} />1
                Large Bag
              </Stack>

              <Stack
                xs={12}
                md={3}
                direction="row"
                alignItems="center"
                gap={1}
                marginLeft={{ md: "20px" }}
              >
                <LuggageIcon fontSize="small" style={{ color: "#00d2d3" }} />1
                Small Bag
              </Stack>

              <Grid item xs={12} md={2} container></Grid>
            </Grid>
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

export default Detail;
