import { Typography } from "@mui/material";
import React, { useState } from "react";

const Vote = ({ yes, no, user }) => {
  const [agree, setAgree] = useState(yes);
  const [disagree, setDisagree] = useState(no);
  const [disabled, setDisabled] = useState(false);

  const handleYesClick = () => {
    if (disabled || !user) return;
    setAgree(agree + 1);
    setDisabled(true);
  };

  const handleNoClick = () => {
    if (disabled || !user) return;
    setDisagree(disagree + 1);
    setDisabled(true);
  };

  return (
    <div>
      Useful?{" "}
      <Typography
        variant="span"
        component="span"
        sx={{
          padding: "5px",
          borderRadius: "5px",
          backgroundColor: "#00d2d3",
          fontWeight: 600,
          cursor: disabled || !user ? "auto" : "pointer",
        }}
        onClick={handleYesClick}
      >
        Yes &#8226; {agree}
      </Typography>{" "}
      <Typography
        variant="span"
        component="span"
        sx={{
          padding: "5px",
          borderRadius: "5px",
          backgroundColor: "#00d2d3",
          fontWeight: 600,
          cursor: disabled || !user ? "auto" : "pointer",
        }}
        onClick={handleNoClick}
      >
        No &#8226; {disagree}
      </Typography>
    </div>
  );
};

export default Vote;
