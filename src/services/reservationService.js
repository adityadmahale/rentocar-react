import http from "./httpService";

const reservationsAPIEndpoint = "/reservations/";

export const getReservations = () => {
  return http.get(reservationsAPIEndpoint);
};

export const getSpecificReservations = (username) => {
  return http.post(reservationsAPIEndpoint + "search", username)
};

export const cancelReservation = (id) => {
  return http.delete(reservationsAPIEndpoint + `${id}`)
};