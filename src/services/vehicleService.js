import http from "./httpService";

const vehiclesAPIEndpoint = "/vehicles/";

export const getVehicles = () => {
  return http.get(vehiclesAPIEndpoint);
};
