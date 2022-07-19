import http from "./httpService";

const reservationsAPIEndpoint = "/reservations/";

export const getReservations = () => {
  return http.get(reservationsAPIEndpoint);
};

export const cancelReservation = (id, cancellationReason) => {
  return http.delete(reservationsAPIEndpoint + `${id}`, { data: { cancellationReason: cancellationReason } })
};