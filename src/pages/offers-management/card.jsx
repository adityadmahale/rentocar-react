import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const StyledButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#00d2d3",
  borderColor: "#00d2d3",
  padding: "15px",
  "&:active": {
    backgroundColor: "#00d2d3",
    borderColor: "#00d2d3",
  },
  "&:hover": {
    backgroundColor: "#00d2d3",
    borderColor: "#00d2d3",
  },
  "&:disabled": {
    border: "1px solid #999999",
    backgroundColor: "#cccccc",
    color: "#666666",
  },
});

const OfferCard = ({ offer, selectedOffer, onSelect, onApply, applied }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 345,
        height: "580px",
        marginLeft: "15px",
        cursor: "pointer",
        backgroundColor:
          selectedOffer && offer.id === selectedOffer.id ? "#bbb" : "#fff",
      }}
      onClick={() => onSelect(offer)}
    >
      <CardMedia
        component="img"
        height="300"
        image={offer.image}
        alt={offer.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {offer.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.description}
        </Typography>
      </CardContent>
      <StyledButton
        size="small"
        variant="outlined"
        onClick={onApply}
        disabled={applied}
      >
        Apply
      </StyledButton>
    </Card>
  );
};

export default OfferCard;
