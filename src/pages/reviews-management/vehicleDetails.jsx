import Details from "./detail";
import Reviews from "./reviews";
import React from "react";
import NavBar from "../../components/common/nav-bar";

const VehicleDetails = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Details />
      <Reviews />
    </React.Fragment>
  );
};

export default VehicleDetails;
